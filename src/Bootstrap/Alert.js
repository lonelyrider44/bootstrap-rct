function Alert({color = 'primary', children = 'ttt  '}) {
    return (
        <div className={`alert alert-${color} alert-dismissible fade show`} role="alert">
            {children}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    );
}

export default Alert;