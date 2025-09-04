import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./Button.module.scss";

function Button({
    primary = false,
    rounded = false,
    bordered = false,
    children,
    href,
    size = "medium",
    className,
    disabled = false,
    loading = false,
    onClick,
    ...passProps
}) {
    const classNames = clsx(styles.wrapper, className, styles[size], {
        [styles.primary]: primary,
        [styles.rounded]: rounded,
        [styles.bordered]: bordered,
        [styles.disabled]: disabled,
        [styles.loading]: loading
    });

    const Component = href ? "a" : "button";
    
    const handleClick = (e) => {
        if (disabled || loading) return;
        onClick && onClick(e);
    };
    
    const props = {
        ...passProps,
        className: classNames,
        onClick: handleClick,
        disabled: disabled || loading
    };
    
    // Only add href to anchor elements
    if (href) {
        props.href = href;
    }

    return (
        <Component {...props}>
            {children}
            {loading && <span className={styles.spinner}></span>}
        </Component>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    primary: PropTypes.bool,
    rounded: PropTypes.bool,
    bordered: PropTypes.bool,
    href: PropTypes.string,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    className: PropTypes.string,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    onClick: PropTypes.func,
};

export default Button;