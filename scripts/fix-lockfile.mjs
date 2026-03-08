import { unlinkSync } from 'fs';
import { join } from 'path';

try {
  const lockfilePath = join(process.cwd(), 'pnpm-lock.yaml');
  unlinkSync(lockfilePath);
  console.log('[v0] pnpm-lock.yaml removed successfully - will be regenerated on next install');
} catch (error) {
  console.log('[v0] Lockfile cleanup result:', error.message);
}
