'use client';
import { useSearchParams, usePathname } from 'next/navigation';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  UseDisclosureProps
} from '@nextui-org/modal';
import LoginOptions from './login-options';
import { useRouter } from 'next/navigation';

export default function LoginModal(
  SidebarContext: UseDisclosureProps | undefined
) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure(SidebarContext);

  // let { isOpen } = useContext(SidebarContext);

  const router = useRouter();

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Logg inn</ModalHeader>
            <ModalBody>
              <LoginOptions />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
