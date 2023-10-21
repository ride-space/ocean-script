import { Card,  CardFooter, CardHeader } from '@nextui-org/card';
import { ScrollShadow } from '@nextui-org/react';
import { User } from '@nextui-org/user';

export const Sidebar = () => {
  return (
    <aside>
      <Card isBlurred>
        <CardHeader className='justify-between'>
          <User
            name='Jane Doe'
            description='Product Designer'
            avatarProps={{
              src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
            }}
          />
        </CardHeader>
        <div className='px-3 py-0 text-small text-default-400'>
          <p>
            Frontend developer and UI/UX enthusiast. Join me on this coding
            adventure!
          </p>
          <span className='pt-2'>
            #FrontendWithZoey
            <span className='py-2' aria-label='computer' role='img'>
              💻
            </span>
          </span>
        </div>
        <CardFooter className='gap-3'>
          <div className='flex gap-1'>
            <p className='text-small font-semibold text-default-400'>4</p>
            <p className=' text-small text-default-400'>Following</p>
          </div>
          <div className='flex gap-1'>
            <p className='text-small font-semibold text-default-400'>97.1K</p>
            <p className='text-small text-default-400'>Followers</p>
          </div>
        </CardFooter>
      </Card>
      <Card className='sticky '>
        <ScrollShadow id='tocNav' className='h-[20px]'></ScrollShadow>
      </Card>
    </aside>
  );
};
