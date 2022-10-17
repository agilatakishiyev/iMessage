import { Button } from "@chakra-ui/react";

interface IChatProps {
  session: any;
}

const Chat: React.FC<IChatProps> = () => {
  return <Button>Sign out</Button>;
};

export default Chat;
