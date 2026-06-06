import { Account } from '../Account';
import { Button } from '../Button';
import { IconWallet } from '../icons';
import { List } from '../List';
import { ListItem } from '../ListItem';

export const Accounts = () => {
    const items = [
        { bank: 'Anybank', balance: 1200 },
        { bank: 'Bytebank', balance: 800 },
        { bank: 'Switch Bank', balance: 1800 },
    ];
    return (
        <div className='flex flex-col h-full'>
            <List>
                {items.map((accountItem, index) => (
                    <ListItem key={index}>
                        <Account item={accountItem}/>
                    </ListItem>
                ))}
            </List>
            <div className='grow' />
            <div className='flex justify-center'>
                <Button>
                    <IconWallet /> Adicionar conta
                </Button>
            </div>
        </div>
    );
};
