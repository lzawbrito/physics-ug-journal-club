## Python Crash Course


### Setting Up
#### Just Python 
Download and install Python (in this case version 3.7.3) following
[these instructions](https://www.python.org/downloads/release/python-373/).
From the console (agnostic to the OS) you should be able to run 
```
>>> python --version 
```

If the console does not print something like `Python 3.8.8` something has 
gone wrong and Python was not installed properly. 

#### Python via Anaconda (Recommended)
Conda is a package and environment manager for Python. We'll explain what those 
two terms mean briefly.

Download and install Anaconda by following
[these instructions](https://docs.anaconda.com/anaconda/user-guide/faq/#id2).
You should be able to, again, see something printed when you run 
```
conda --version
```

As of right now, Anaconda by default either installs Python 2.7
(`Anaconda`) or Python 3.8 (`Anaconda3`).

### Packages
Very often when someone writes a program, they might regard it as useful enough 
to distribute to other people so they don't have to write said program
themselves. In that case, the original author of that program will create a 
*package* out of the program. In short, packages are ready-to-use pieces of code 
that other people have written. 

Some packages commonly used in physics are 
- [Scipy](https://www.scipy.org/}): perform numerical 
  integration, solve differential equations, imports fundamental constants.
- [Numpy](https://numpy.org/): linear algebraic operations, easy array handling. 
- [Sympy](https://www.sympy.org/en/index.html): symbolic mathematics (think 
  Wolfram Alpha or Mathematica).
- [Matplotlib](https://matplotlib.org/): graphing, plotting, animations. 
  See [Seaborn](https://seaborn.pydata.org/) as well.
- [Astropy](https://www.astropy.org/): astronomy utilities (read FITS files, 
  convert between coordinate systems, so on). 

### (Virtual) Environments 
Sometimes we won't use the same packages across all projects we work on. We also 
might not use the same version of Python. Some packages are only supported on 
older versions of programming languages, and others are only supported in 
newest versions. The dilemma is then: will I have to uninstall and reinstall 
Python every time I want to work on a different project which requires different 
packages and different versions of the language?

*No*. This is what *virtual environments* are for. The packages you use and the 
version of Python you're using constitute the environment you're working in. 
*Virtual* environments are like isolated environments which you can set up however 
you wish without affecting other environments. 

Let's set up an environment as an illustration. 
First we're gonna make a new file (or directory) called `python-demo`: 
```
>>> mkdir-python demo
```

Then we're going to create a new environment via Anaconda. Let's choose Python 
3.7 and name is environment `jc`: 
```
>>> conda create -n jc python=3.7
```

To view a list of the environments we've created, we can submit 
```
>>> conda env list 
```

To remove an environment, we can run 
```
>>> conda env remove -n jc
```

So if we run `conda env list` we should no longer see `jc`. But we'll create the 
environment again because we need it for the demo. 

Two notes: first, the environment is not created in this directory. It is stored 
wherever Anaconda was installed in your computer. Second, if we run Python at
the moment we won't actually be running it in the virtual environment we've 
created. Namely, if we install a package right now, it won't install to the 
environment. We actually need to *activate* the environment. 
```
>>> conda activate jc
```

Now we can install packages: 
```
>>> conda install numpy
```

We can remove packages via: 
```
conda remove numpy
```

We can list all the packages we have installed: 
```
conda list
```

Now say we want other collaborators to be able to set up their virtual 
environments in the same way that we did. We can actually generate a file they 
can use to install all the packages we are using. Running 
```
>>> conda list -e 
```

Provides a machine-readable list of packages. Then we can save that output to 
a file using `>`: 
```
>>> conda list -e > requirements.txt
```

Now if we deactivate the environment
```
>>> conda deactivate
```

we can create a new environment with the exact same packages and Python version:
```
>>> conda create --name jc2 --file requirements.txt
```

### Python in a REPL 
If we activate our environment and run the command `python` we see a bunch of 
things get printed and see a much-much greater than sign: 
```
>>>
```

We have entered what is called a *REPL*, which stands for "read-evaluate-print
loop." This means that the program will read a line we give it, evaluate the 
the command, print the result, then prompt us to type a new line, thus engaging 
in a loop. This is how you do a lot of fast and dirty work in Python. For
example if we import Numpy we can calculate the cosine of some number: 
```
>>> import numpy as np 
>>> np.cos(3.14)
>>> np.cos(np.pi)
```

(This "import as" syntax just means we are gonna import this package and rename 
it `np` so we don't have to write `numpy` every time). 

I personally tend to use the Python REPL only when I want to really quickly 
check if I can safely do a certain thing in Python or if I want to do a simple 
calculation. Most of the time, however, you'll find yourself writing scripts. 

Scripts are just files ending in `.py`. They can be edited using whatever editor
you'd like. Common choices are VSCode and PyCharm; for this demonstration I'll 
be using VSCode. All we need is to create a new file called say `demo.py` in
`demo`, open VSCode in this directory, then open that file. No we can start 
writing a script by adding commands that will be run in the order that we type 
them. 

We can add the same lines we did before:
```
import numpy as np 
np.cos(np.pi)
```

And we can run the file by either running, in the console (with our environment
activated!), 
```
python demo.py
```

Or, if we have our editor set up correctly, we should be able to click some 
sort of run button. Setting up your editor can be a pain, in this case my 
VSCode is already set up, so if you have any particular problems doing so feel 
free to find me. In short, for VSCode we need to install a Python "extension" 
then in the bottom info display select the right environment. The extension 
should recognize the Anaconda environments that are set up.

You'll notice nothing printed, and that's because this isn't a REPL. If we want 
to actually see things we have to call `print` on them: 
```
print(np.cos(np.pi))
```



### Further topics:
CS courses useful for physicists:
- **CSCI0190** or **CSCI0170** and/or **CSCI0180** (i.e., some intro course)
- **CSCI1951A** - Data Science
- **CSCI1380** - Distributed Computer Systems
- **CSCI2370** - Interdisciplinary Scientific Visualization (If you're interested in
  this kind of thing and want to learn more about the process of interdisciplinary
  research. It's a bit of a unique course and definitely not for everyone so feel
  free to ask me about it!)

