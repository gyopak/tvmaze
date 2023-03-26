import { Card, Image, Group, Title } from '@mantine/core';
import './Show.css'

function Show(show) {
  const { name, image, titleOnly, setSelectedShow } = show

  return (
    <div className={titleOnly ? 'Show TitleOnly' : 'Show'}>
      <Card shadow="sm" padding="lg" radius="md" onClick={() => setSelectedShow(show)} withBorder style={{
        width: '150px',
        height: '100%',
        paddingBottom: '0',
      }}>
        {!titleOnly && (
          <Card.Section>
            <Image
              src={image?.medium}
              alt={name}
            />
          </Card.Section>
        )}

        <Group position="apart" mt="md" mb="xs">
          <Title order={titleOnly ? 3 : 6} style={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          }}>{name}</Title>
        </Group>
      </Card>
    </div>
  )
}

export default Show
