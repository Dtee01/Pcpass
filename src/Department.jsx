import loginpic from '/icons/PCstart.png';

export default function Department()
{
    return(
    <div>
        <div>
            <img src = {loginpic} alt ="pc-logo" />
        </div>
        <div>
            <nav>
                <h5>NEW LAPTOP</h5>
                <h5>VIEW LAPTOPS</h5>
                <h5>VIEW STUDENTS</h5>
                <h5>MY ACCOUNT</h5>
                <h5>LOG OUT</h5>
            </nav>
            <main>
                <h2>STUDENT LAPTOP DECLARATION</h2>
             <div>
                <ul>
                    <li>
                        <label>LAPTOP SERIAL</label>
                        <input type='text' />
                    </li>
                    <li>
                        <label>LAPTOP MODEL</label>
                        <input type='text' />
                    </li>
                     <li>
                        <label>STUDENT REG</label>
                        <input type='text' />
                    </li>
                </ul>
                </div>
                <div>
                    <button>CLEAR</button>
                    <button>REGISTER</button>
                </div>
            </main>
        </div>
    </div>
    )
}