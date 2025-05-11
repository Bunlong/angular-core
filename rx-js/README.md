# RxJS

Have you ever wondered how you can open a 10GB file on a device with only 4GB of RAM?

Have you ever wondered how Netflix app can play a cloud-hosted 4K movie as soon as you press the play button? On a device with only 4GB of RAM?

How does your device manage to load something that is infinite?

It has to stream the data and process it in small chunks.

## What is a Stream?

The stream is a collection of data that is infinite. It is a sequence of data coming in overtime.

```
Stream = Array + Infinity
```

### Loop

```
for (let i = 0; i < infinite; i++) { 
  const element = stream[i]; 
}
```

The problem is how do you know when to stop it.

### Observables

```
Observable = Array + Infinity + Asynchronous
// OR
Observable = Promise + Returns many times
```

```
————— Value 1 ————— Value 2 ————— Value 3 ————— Value 4 —————|—>
```

```
const observable = from([1, 2, 3, 4]); 
  
// 3 states => next, complete, error 
observable.subscribe({ 
  next: (value) => console.log("Next value:", value), 
  complete: () => console.log("Infinity is Done!!!"), 
  error: (err) => console.log("Error", err), 
});
```

The most popular Observable libraries in JavaScript is RxJS.

## RxJS

```
of(10, 20, 30).subscribe( 
  next => console.log('next:', next), 
  err => console.log('error:', err), 
  () => console.log('the end'), 
);

```

### RxJS Operations

#### Common RxJS Operations

##### Observable Creation:

* of()
* from()
* ajax()

##### Combination Operators:

* merge()
* combineLatest()
* forkJoin()

##### Filtering Operators:

* filter()
* distinctUntilChanged()
* debounceTime()

##### Transformation Operators:

* map()
* pluck()
* scan()

##### Error Handling Operators:

* catchError()
* retry()

##### Utility Operators:

* tap()
* delay()
