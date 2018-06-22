## 1.4.0
* :gift: add setting for state column style (text or icon) #21
* :gift: re-sizable columns in results view
* :gift: serialize columns width
* :bug: fix sort if wrong message format

## 1.3.2
* :bug: fix #16
* :bug: fix update editor epic

## 1.3.1
* :bug: fix error format if message is empty (mocha >3.4)
* :bug: fix test with windows path
* :bug: fix padding for console view

## 1.3.0
* :gift: save tester state for each project even after restart (serialize panels, results, output etc.)
* :gift: merge test results per file that not remove another file results
* :gift: add 'current file only' filter
* :gift: add 'Clear' button
* :gift: add settings for status bat position and priority
* :gift: add total tests and total time indicators to results view
* :gift: improve soft wrap for errors in results view
* :gift: add copy context menu to console output view
* :gift: additional args are also used for file test now
* :art: rewrite package with redux and redux-observable to use state
* :racehorse: improve performance and code quality
* :arrow_up: upgrade dependencies

## 1.2.1
* :bug: clear gutter after each test run #17

## 1.2.0
* :gift: add serialization

## 1.1.1
* :bug: fix #11

## 1.1.0
* :gift: add `test-last` command

## 1.0.1
* :bug: fix #10

## 1.0.0
* add "Run all project tests" feature :tada:
* add "Results View" :tada:
* rewrite all view with etch (remove jquery) :racehorse:
* upgrade dependencies :arrow_up:

## 0.4.6
* add unknown state with inline messages

## 0.4.5
* add 'read more' function on click for inline messages

## 0.4.4
* set default inline message position to tail
* fix tail styles
* fix inline error message format

## 0.4.3
* add tail option for inline messages

## 0.4.2
* fix scroll after test
* add scroll console output to bottom setting
* add scroll to bottom and top button to view

## 0.4.1
* fix output view resize limitations

## 0.4.0
* remove 'testOnChagne' feature
* make output view resizable
* fix errors if test finished and editor was closed

## 0.3.4
* add loading spinner to output view

## 0.3.2
* fix #6

## 0.3.1
* add experimental feature - test all opened after any save
* fix status tiny
* improve pop-up notifications

## 0.3.0
* add inline error messages

## 0.2.14
* fix statusBar position

## 0.2.13
* better tiny behavior

## 0.2.12
* show info with test results if test editor is not active

## 0.2.11
* add setting "test on save"
* remember last test results and show it on tab switch

## 0.2.10
* escape html in console output
* set right colors for console output

## 0.2.9
* add stop functionality

## v0.2.8
* fix scopes path for Windows
* add windows build checks

## v0.2.7
* add config to convert console output from ansi to html

## v0.2.6
* Merge pull request #1 from hotchpotch/changetoggle_command

## v0.2.5
* fix test on change

## v0.2.4
* disable test on change by default

## v0.2.3
* fix destroy functionality

## v0.2.2
* fix regexp handling
* alway show status bar

## v0.2.1
* fix scopes pattern
* fix locking

## v0.2.0 - First Functional release
* Added Interactive Tester
* Added First integration with [tester-mocha](https://github.com/yacut/tester-mocha) provider
* Useful IDE based Feedback
* Session based test watching

## v0.1.0 - First Release
* Just block the name in the atom registry
