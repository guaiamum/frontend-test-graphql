import classNames from 'classnames';
import './styles.css';

interface ListItemArticleProps {
    article: Article,
    clickHandler: (articleTitle: string) => void
    isCurrentSelected: boolean
    wasRead: boolean
}

function ListItem({ article: { title, urlToImage, description }, clickHandler, isCurrentSelected = false, wasRead = false }: ListItemArticleProps) {
    return (<li className={classNames('ListItem', { 'ListItem--selected': isCurrentSelected, 'ListItem--read': wasRead })}>
        <button className="ListItem-link" onClick={() => { !isCurrentSelected && clickHandler(title) }}>
            <img className="ListItem-img" src={urlToImage} alt="" width="20%" />
            <h2 className="ListItem-title" >{title}</h2>
            <p className="ListItem-desc" >{description}</p>
        </button>
    </li>)
}

export default ListItem;
