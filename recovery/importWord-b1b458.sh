#!/usr/bin/env node

importjs word ${word} ${file}`)
} catch (e) {
  console.log(e)
}
// const data = JSON.parse(results)
//
// console.log(data.messages, data.error)
//
// if (data.error) {
//   sh.echo(data.error)
//   process.exit(1)
// } else {
//   data.messages.forEach(sh.echo)
//   fs.writeFile(filePath, data.fileContent, err => {
//     if (err) {
//       handleErr(err)
//     }
//
//     process.exit(0)
//   })
// }
