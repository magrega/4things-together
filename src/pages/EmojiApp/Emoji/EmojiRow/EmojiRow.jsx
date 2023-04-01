import './EmojiRow.css';

const EmojiRow = ({ item }) => {

    return (
        <div className="emoji-row">
            <span className="emoji-row__symbol">{item.symbol}</span>
            <span className="emoji-row__title">{item.title}</span>
        </div>
    );
};

export default EmojiRow;