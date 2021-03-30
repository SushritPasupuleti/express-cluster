# express-cluster

 Using cluster to scale express across CPU cores.
## Comparing Results

```bash
loadtest -n 1000 -c 100 http://localhost:3000/
```

## Results

> Before implementing Clusters

```bash
[Tue Mar 30 2021 14:50:26 GMT+0530 (India Standard Time)] INFO Requests: 0 (0%), requests per second: 0, mean latency: 0 ms
[Tue Mar 30 2021 14:50:28 GMT+0530 (India Standard Time)] INFO 
[Tue Mar 30 2021 14:50:28 GMT+0530 (India Standard Time)] INFO Target URL:          http://localhost:3000/
[Tue Mar 30 2021 14:50:28 GMT+0530 (India Standard Time)] INFO Max requests:        1000
[Tue Mar 30 2021 14:50:28 GMT+0530 (India Standard Time)] INFO Concurrency level:   100
[Tue Mar 30 2021 14:50:28 GMT+0530 (India Standard Time)] INFO Agent:               none
[Tue Mar 30 2021 14:50:28 GMT+0530 (India Standard Time)] INFO 
[Tue Mar 30 2021 14:50:28 GMT+0530 (India Standard Time)] INFO Completed requests:  1000
[Tue Mar 30 2021 14:50:28 GMT+0530 (India Standard Time)] INFO Total errors:        0
[Tue Mar 30 2021 14:50:28 GMT+0530 (India Standard Time)] INFO Total time:          2.3585703 s
[Tue Mar 30 2021 14:50:28 GMT+0530 (India Standard Time)] INFO Requests per second: 424
[Tue Mar 30 2021 14:50:28 GMT+0530 (India Standard Time)] INFO Mean latency:        217.2 ms
[Tue Mar 30 2021 14:50:28 GMT+0530 (India Standard Time)] INFO 
[Tue Mar 30 2021 14:50:28 GMT+0530 (India Standard Time)] INFO Percentage of the requests served within a certain time
[Tue Mar 30 2021 14:50:28 GMT+0530 (India Standard Time)] INFO   50%      210 ms
[Tue Mar 30 2021 14:50:28 GMT+0530 (India Standard Time)] INFO   90%      263 ms
[Tue Mar 30 2021 14:50:28 GMT+0530 (India Standard Time)] INFO   95%      293 ms
[Tue Mar 30 2021 14:50:28 GMT+0530 (India Standard Time)] INFO   99%      302 ms
[Tue Mar 30 2021 14:50:28 GMT+0530 (India Standard Time)] INFO  100%      325 ms (longest request)
```