import { exec } from 'child_process';
import { promises as fs } from 'fs';
import path from 'path';
import { promisify } from 'util';

const execAsync = promisify(exec);

// Configuration
const NEXTJS_DIR = process.cwd(); // Current directory (Next.js project)
const GITHUB_PAGES_DIR = '../davidmccoy.github.io'; // Github pages directory
const FILES_TO_PRESERVE = ['.git', '.gitignore', '.nojekyll', 'CNAME']; // Files needed to host on Github pages

async function deploy() {
    try {
        console.log('🏗 Building Next.js static site...');
        await execAsync('next build', { cwd: NEXTJS_DIR });

        console.log('📦 Preparing to copy files...');

        // Ensure GitHub Pages directory exists
        await fs.access(GITHUB_PAGES_DIR).catch(async () => {
            console.log('Creating GitHub Pages directory...');
            await fs.mkdir(GITHUB_PAGES_DIR, { recursive: true });
        });

        // Get all files to preserve with their stats
        const preserveFiles = new Map();
        for (const file of FILES_TO_PRESERVE) {
            const fullPath = path.join(GITHUB_PAGES_DIR, file);
            try {
                const stats = await fs.stat(fullPath);
                preserveFiles.set(file, { path: fullPath, stats });
            } catch (error) {
                console.log(`Note: ${file} not found in target directory`, error);
            }
        }

        // Delete everything in GitHub Pages directory except preserved files
        const files = await fs.readdir(GITHUB_PAGES_DIR);
        for (const file of files) {
            if (!FILES_TO_PRESERVE.includes(file)) {
                const fullPath = path.join(GITHUB_PAGES_DIR, file);
                await fs.rm(fullPath, { recursive: true, force: true });
            }
        }

        // Copy new files from out/ to GitHub Pages directory
        await execAsync(`cp -r ${NEXTJS_DIR}/out/* ${GITHUB_PAGES_DIR}/`);

        // Restore preserved files if they were accidentally overwritten
        for (const [file, data] of preserveFiles) {
            const sourceExists = await fs.access(data.path).then(() => true).catch(() => false);
            if (!sourceExists) {
                console.log(`Restoring ${file}...`);
                // If it's a directory, create it
                if (data.stats.isDirectory()) {
                    await fs.mkdir(data.path, { recursive: true });
                }
            }
        }

        console.log('✅ Deploy preparation complete!');
        console.log('\nNext steps:');
        console.log('1. cd ../davidmccoy.github.io');
        console.log('2. git add .');
        console.log('3. git commit -m "Update site"');
        console.log('4. git push');

    } catch (error) {
        console.error('❌ Deploy failed:', error);
        process.exit(1);
    }
}

deploy();
