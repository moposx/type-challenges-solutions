# 108 - Trim

About how single-side trimming is done, see the note of [106 - Trim Left](../00106-medium-trimleft/note.md).

In this challenge, we need to trim the both side of the given string, which is essentially the combination of `TrimLeft` and `TrimRight`, i.e. `compose(TrimLeft<S>, TrimRight)`. The order depends on the location of starting point. If we plan to first trim the left end of the string, we need `TrimRight<TrimLeft<S>>`, and the revesed one if we choose to trim the string from the right end.
