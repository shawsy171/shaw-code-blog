# Dont use useEffect?

## Subtitle: Use useEffect less

[Goodbye, useEffect - David Khourshid](https://www.youtube.com/watch?v=bGzanfKVFeU)

So I used it a custom hook instead of using useEffect on mount for an api call, but how do I cancel the request? It seems I have to control when to abort, so on page change or a button click for example

1. put action effects inside of event handlers
2. state updates
3. useSyncExternalStore for syncronnise with an External store
4. make api call in a custom hook on mount

- Every time there is a re-render the useEffect is recreated
- If the useEffect sets state and listens for state changes then it maybe a sign you should use something else

## Refactor 1

```javascript
const Component = ({ data }) => {
  const [filterData, setFilteredData] = useState();

  useEffect(() => {
    const filteredData = data.filter((item, index, arr) => arr.includes(filterText));
  },[data]);

  return (
    <ul>
    { filterData.map((item) => <li>{item}</li>) }
    </ul>
  )
}
```

to

```javascript
const Component = ({ data }) => {

  const filteredData = data.filter((item, index, arr) => arr.includes(filterText));

  return (
    filterData.map((item) => <li>{item}</li>)
  )
}
```

refactor 2
items and total as internal state
updating items updates total
