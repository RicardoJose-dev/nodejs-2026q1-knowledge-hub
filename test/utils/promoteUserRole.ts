import prisma from '../lib/prisma';
import { UserRole } from 'src/db/prisma/client/enums';

const promoteUserRole = async (
  userId: string,
  role: UserRole,
): Promise<void> => {
  await prisma.user.update({
    where: { id: userId },
    data: { role },
  });
};

export default promoteUserRole;
