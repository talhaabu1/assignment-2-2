import { app } from './app';
import mongoose from 'mongoose';
import config from './app/config';

main().catch((err) => console.log(err));

// connection in mongodb database ⤵
async function main() {
  await mongoose.connect(config.database_url as string);
}
// connection in mongodb database ⤴

// server listening on port call ⤵
app.listen(config.port, () => {
  console.log(`Server app listening on port ${config.port}`);
});
// server listening on port call ⤴
