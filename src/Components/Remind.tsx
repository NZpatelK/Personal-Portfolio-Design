import React from 'react';
import '../Styles/Remind.css';

const Remind: React.FC = () => {

    return (
        <>
            <h2>Remind</h2>
            <p>I would like to remind you that whenever you encounter challenging situations, this message aims to provide you with help and inspiration. It is a concise message, but I hope it proves beneficial to you. As you scroll down, you will discover five sections of inspiring and supportive messages. Additionally, you can refresh the page to receive an automatic display of a new message.</p>
            <a href={'#m-0'} className="next">Next</a>
        </>
    )
};

export default Remind;
