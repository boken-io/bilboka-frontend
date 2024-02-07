'use client';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure
} from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import CorbadoLogin, { Modes } from './auth-corbado';

export default function LoginModal(props: { mode: Modes }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();

  function closeModal() {
    router.back();
  }

  return (
    <Modal
      isOpen={true}
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
