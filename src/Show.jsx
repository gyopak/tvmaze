import { Card, Image, Group, Title } from '@mantine/core';
import './Show.css'

function Show({ name, image }) {
  return (
    <div className="Show">
      <Card shadow="sm" padding="lg" radius="md" withBorder style={{
        width: '200px',
        paddingBottom: '0',
      }}>
        <Card.Section>
          <Image
            src={image?.medium}
            alt={name}
          />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Title order={6} style={{
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
