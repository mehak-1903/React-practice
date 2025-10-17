import useLocalStorage from "./useLocalStorage"

export default function ThemeToggle(){
    const [theme, setTheme] = useLocalStorage("theme", "light");

    const toggleTheme = () => (
        setTheme(theme === "light" ? "dark" : "light")
    )
    return(
        <div style={{ backgroundColor : theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#dedede"}}>
            <h2>Toggle Theme : {theme}</h2>
            <button onClick={toggleTheme}>Toggle Theme.</button>
        </div>
    )
}