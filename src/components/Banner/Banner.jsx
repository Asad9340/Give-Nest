import { Button, Input, Typography } from "@material-tailwind/react";
import React from "react";

function Banner() {
    const [email, setEmail] = React.useState('');
    const onChange = ({ target }) => setEmail(target.value);
  return (
    <div className="h-[450px] border  flex flex-col justify-center items-center">
      <Typography variant="h2">Material Tailwind</Typography>
      <div className="relative flex w-full max-w-[24rem]">
        <Input
          type="email"
          label="Email Address"
          value={email}
          onChange={onChange}
          className="pr-20 text-black text-base md:text-lg"
          containerProps={{
            className: 'min-w-0',
          }}
        />
        <Button
          size="sm"
          className="!absolute right-1 top-1 rounded"
        >
          Search
        </Button>
      </div>
    </div>
  );
}

export default Banner