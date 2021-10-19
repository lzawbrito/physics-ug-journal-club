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


### Further topics:
CS courses useful for physicists:
- CSCI0190 or CSCI0170 and/or CSCI0180 (i.e., some intro course)
- CSCI1951A - Data Science
- CSCI1380 - Distributed Computer Systems

