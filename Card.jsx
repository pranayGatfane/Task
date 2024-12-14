import record from './content.json';
import xero from '../assets/xero.png'; 

export const Card = () => {
    return (
        <div className='card_Content'>
            <div className="1">Intergration for ZOHO CRM</div>
            {record.map(content => {
                return (
                    <div className='cards'>
                        <div className='card_image'>
                        <img src={xero} alt="Logo" />
                        </div>
                        <div className='card_content'>
                            <div >
                                {content.title}
                            </div>
                            <div className='card_desc'>
                                {content.desc}
                            </div>
                            <div>
                                <button type="button" className='btn'>View</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
