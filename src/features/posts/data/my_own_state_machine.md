# My own state machine

```typescript
const machine = {
  pause: {
    actions: []
    transitions {
      play: () => { 
        machine.play.actions
      }
      restart: {
        action: []
      }
    }
  },
  play:  {
    actions: [],
    transitions: {
      pause: {
        actions: []
      }
    }
  },
  restart:  {
    transitions: { 
      stop: {
        actions: []
      }
    }
  }
}
current.state().transitions.play
```
