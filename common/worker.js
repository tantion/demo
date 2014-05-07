/**
 * Created by tantion on 5/7/14.
 */

console.log('I am in worker.js', self)

self.postMessage('done message')