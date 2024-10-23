//

const Controller = ({ onClickButton }) => {
  const Button = ({ name }) => {
    const onClick = (e) => {
      var num = e.target.value; // type 변환 string->Number
      num = Number(num);
      onClickButton(num);
    };
    return (
      <button value={name} onClick={onClick}>
        {name}
      </button>
    );
  };

  return (
    <div>
      <Button name="-1" />
      <Button name="-10" />
      <Button name="-100" />
      <Button name="100" />
      <Button name="10" />
      <Button name="1" />
    </div>
  );
};

export default Controller;
