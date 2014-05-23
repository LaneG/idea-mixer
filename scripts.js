 $(document).ready(function () {
          $.fn.shuffle = function () {
              $.each(this.get(), function (index, el) {
                  var $el = $(el);
                  var $find = $el.children();

                  $find.sort(function () {
                      return 0.5 - Math.random();
                  });

                  $el.empty();
                  $find.appendTo($el);
              });
          };

          $('.shuffled').shuffle();

          $('body').click(function () {
              $('.shuffled').shuffle();
          });
      });