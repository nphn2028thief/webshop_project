function TabTitle({ title, children }) {
    document.title = 'Web Shop - ' + title;

    return <>{children}</>;
}

export default TabTitle;
