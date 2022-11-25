import './container.css';

export const Container = ({children, width}) =>{

    const styles = {
        width: width || '90%',
    }

    return (
        <div className="container" style={styles}>
            {children}
        </div>
    )
}