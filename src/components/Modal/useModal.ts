import { useCallback, useState } from 'react';

export const useModal = (): { show: boolean; onClose: () => void; onOpen: () => void } => {
  const [show, setShow] = useState<boolean>(false);

  const onClose = useCallback(() => setShow(false), []);
  const onOpen = useCallback(() => setShow(true), []);

  return { show, onClose, onOpen };
};
