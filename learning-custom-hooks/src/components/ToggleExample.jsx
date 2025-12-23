import useToggle from '../custom-hooks/useToggle'

function ToggleExample() {
    const [isOpen, toggle] = useToggle();
  return (
    <div>
        <button onClick={toggle}>{isOpen ? 'Hide' : 'Show'}</button>
        {isOpen && <p>Hello Mehak!!!</p>}
    </div>
  )
}

export default ToggleExample