import { Pool } from 'pg'
export const pool=new Pool({
    host:'ec2-34-234-12-149.compute-1.amazonaws.com',
    user:'rdeqfvaeuvnkai',
    password:'b913d0c91608435fbc5113b04ecc3ad195fbe77b7eba8d10ac05c235beb63de7',
    database:'d96t1qr6q5dgfl',
    port:5432,
    ssl:{rejectUnauthorized:false}
});