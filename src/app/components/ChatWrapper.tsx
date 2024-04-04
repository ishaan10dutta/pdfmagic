type ChatWrapperProps = {
  fileId: string;
  isSubscribed: boolean;
};

const ChatWrapper = ({ fileId, isSubscribed }: ChatWrapperProps) => {
  return <div>{fileId + isSubscribed}</div>;
};

export default ChatWrapper;
