import { Image, Title, Modal, Badge, Button, ActionIcon } from '@mantine/core';
import { useEffect, useState } from 'react';
import { IconExternalLink, IconX } from '@tabler/icons-react';
import './ShowModal.css';

const getYear = dateString => dateString?.split('-')?.[0]

function ShowModal({ show }) {
  const [open, setOpen] = useState(false);
  const onClose = () => show?.setSelectedShow(null)

  useEffect(() => (
    setOpen(Boolean(show))
  ), [show, setOpen])

  const started = getYear(show?.premiered)
  const ended = getYear(show?.ended)

  return (
    <Modal
      size="50rem"
      radius="lg"
      opened={open}
      onClose={onClose}
      withCloseButton={false}
    >
      <ActionIcon className="CloseButton" color="orange" size="lg" radius="xl" variant="outline" onClick={onClose}>
      <IconX size="1.5rem" />
    </ActionIcon>
      <Image
        src={show?.image?.original}
        maw={400}
        radius="lg"
        alt={name}
      />
      <div className="ShowDescription">
        <Title order={1}>{show?.name}</Title>
        <Title order={6}>{started} - {ended}</Title>
        <Title order={6}>{show?.language}</Title>
        {show?.genres?.map(genre => (
          <Badge color="orange" size="lg" variant="outline">{genre}</Badge>
        ))}
        <Title order={5} dangerouslySetInnerHTML={{ __html: `${show?.summary}` }}></Title>
        <Button
          radius="lg"
          component="a"
          href={show?.officialSite}
          target="_blank"
          color="green"
          variant="outline"
          leftIcon={<IconExternalLink size="0.9rem" />}
        >
          Official site
        </Button>
      </div>
    </Modal>
  )
}

export default ShowModal
