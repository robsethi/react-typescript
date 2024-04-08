type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

function Greet(props: GreetProps) {
  const { messageCount = 0 } = props;
  return (
    <div>
      {props.isLoggedIn
        ? `Welcome ${props.name}, you have ${messageCount} messages`
        : "Welcome Guest"}
    </div>
  );
}

export default Greet;
