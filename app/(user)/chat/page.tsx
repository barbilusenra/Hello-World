import ChatList from '@/components/ui/ChatList';


type Props = {
    params: {};
    searchParams: {
        error: string;
    }
}

const ChatsPage = ({ searchParams: { error } }: Props) => {
  return (
    <div>
      <ChatList/>
    </div>
  )
}

export default ChatsPage;