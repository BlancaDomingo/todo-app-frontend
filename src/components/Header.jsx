

const Header = () => {
    console.log(Date.now());
    const date = new Date().toString().slice(4, 15)
   
    const day = new Date().getDay()
    let tag = ''
    switch (day) {
        case 0:
            tag = 'Sonntag'
            break;
        case 1:
            tag = 'Montag'
            break;
        case 2:
            tag = 'Dienstag'
            break;
        case 3:
            tag = 'Mittwoch'
            break;
        case 4:
            tag = 'Donnerstag'
            break;
        case 5:
            tag = 'Freitag'
            break;
        case 6:
            tag = 'Samstag'
            break;

        default:
            break;
    }
    console.log(day);


    return (
        <header>
            <div className="title">
                <h1>Meine ToDo Liste</h1>
                <p className="date">{tag}, {date}</p>
            </div>
            <div className="image"></div>

        </header>
    )
}

export default Header;