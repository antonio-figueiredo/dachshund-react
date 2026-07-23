import { useState } from 'react';
import Button from '@mui/material/Button';

export default function CarinhoButton ()
{
    const [carinho, somarCarinho] = useState(0);

    function handleClick () {
        somarCarinho(carinho + 1);
    }
    return <Button 
            onClick={handleClick}
            variant="contained" 
            sx={{
                 fontFamily: '"Balsamiq Sans", sans-serif',
                  mt: 1, 
                  display: "block",
                  mx: "auto",
            }}>
            Carinhos: {carinho} ❤️ </Button> ; 
    
}