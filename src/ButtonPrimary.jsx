const ButtonPrimary = ({ text, url }) => {
    return  (
        <a href={url} className="primary-button" target="_blank">{text}</a>
    );
}
export default ButtonPrimary;