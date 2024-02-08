'use client';
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure
} from '@nextui-org/react';
import { useRouter, usePathname } from 'next/navigation';
import CorbadoLogin, { Modes } from './auth-corbado';

export default function AuthModal(props: { mode: Modes }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();
  const path = usePathname();

  function closeModal() {
    router.push(path, { scroll: false });
  }

  return (
    <Modal
      isOpen={true}
      placement="center"
      backdrop="blur"
      onOpenChange={onOpenChange}
      onClose={closeModal}
      size="lg"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody className="grid justify-center">
              <CorbadoLogin mode={props.mode} />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
