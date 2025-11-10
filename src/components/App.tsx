import { useState } from 'react';
import '../style/App.css';
import { BankComparing } from './BankComparing';
import { RateStats } from './RateStats';
import { BestBankSelection } from './BestBankSelection';
import { validDepositMoney } from '../lib/validation/validateDepositMoney';
import type { BankRate } from '../lib/selectedRate';

/*In percentages */
export const tax = 15;

function App() {
    const [depositMoney, setDepositMoney] = useState(0);
    /*I think the useRef would be better (idk), but I'm dump*/
    const [currentRate, setCurrentRate] = useState<BankRate | null>(null);

    return (
        <main className='w-full'>
            <h1 className='text-3xl m-5 text-center'>Epesni vklady</h1>
            <h2 className='text-xl'>Vklad (CZK):</h2>
            <div className='flex items-center justify-center flex-col'>
                <input type='number' name='depositMoney'
                    className='w-4/5 text-xl text-center p-2.5 mt-2 mb-5 sm:mr-2 sm:ml-2 rounded-full bg-black/75'
                    autoFocus={true}
                    onChange={(e) => {
                        const value = e.target.value;
                        const validValue = validDepositMoney(value);
                        setDepositMoney(validValue);
                    }}
                />
                <BestBankSelection depositMoney={depositMoney} setCurrentRate={setCurrentRate} />
            </div>
            <div className='flex w-full sm:flex-row flex-col mb-20'>
                <RateStats selectedRate={currentRate} depositMoney={depositMoney} />
                <BankComparing depositMoney={depositMoney} setCurrentRate={setCurrentRate} />
            </div>
            <p className='fixed bottom-5 right-5 bg-slate-900 p-2 rounded-xl'>Aktuální daň za termínovaný vklad: {tax}%</p>
        </main>
    )
}

export default App
