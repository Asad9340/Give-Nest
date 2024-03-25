import { Button, Input, Typography } from "@material-tailwind/react";
import React from "react";

function Banner() {
    const [email, setEmail] = React.useState('');
    const onChange = ({ target }) => setEmail(target.value);
  return (
    <div className="h-[450px] flex flex-col justify-center items-center mx-4">
      <Typography variant="h2" className="mb-4">I Grow By Helping People In Need</Typography>
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
        <Button color="red" size="sm" className="!absolute right-1 top-1 rounded">
          Search
        </Button>
      </div>
    </div>
  );
}

export default Banner