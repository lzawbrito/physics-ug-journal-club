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
[Anaconda](https://www.anaconda.com/products/individual) is a package and environment manager for Python. We'll explain what those 
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
- [Scipy](https://docs.scipy.org/doc/scipy/reference/tutorial/index.html#user-guide):
perform numerical 
 integration, solve differential equations, imports
fundamental constants, 
  signal processing, stats. 
- [Numpy](https://numpy.org/): linear algebraic operations, easy array handling. 
- [Sympy](https://www.sympy.org/en/index.html): symbolic mathematics (think 
  Wolfram Alpha or Mathematica).
- [Matplotlib](https://matplotlib.org/): graphing, plotting, animations. 
  See [Seaborn](https://seaborn.pydata.org/) as well.
- [Astropy](https://www.astropy.org/): astronomy utilities (read FITS files, 
  convert between coordinate systems, so on). 
- [Statsmodels](https://www.statsmodels.org/stable/index.html): statistical 
  analysis. See also [Pandas](https://pandas.pydata.org/).

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

### Python in a Script
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
free to find me. In short, for VSCode we need to install a [Python
"extension"](https://marketplace.visualstudio.com/items?itemName=ms-python.python)
then in the bottom info display select the right environment. The extension 
should recognize the Anaconda environments that are set up.

You'll notice nothing printed, and that's because this isn't a REPL. If we want 
to actually see things we have to call `print` on them: 
```
print(np.cos(np.pi))
```

### Python in Jupyter Notebooks
A third way to run Python is in Jupyter Notebooks. Notebooks are, in short,  
documents that can include runnable scripts in them. These are typically used 
when the author wants to combine human-readable text and graphics with code that 
can be executed, usually for the purposes of a demonstration or some quick and 
easy scripting. 

Jupyter has a pretty good [tutorial](https://jupyter.org/try) on how to use
Notebooks, so, in the interest of time, I'm not going to spend too much time
on them.

### Numpy 
Numpy facilitates working with arrays in Python. Let's see how one would, 
for example, set up some sort of mathematical function with Numpy. We can 
make an array running from, say, $-\pi$ to $\pi$ with intervals of size $0.1$
using `arange`: 
```
x = np.arange(- np.pi, np.pi, 0.1)
```

Or an array of 100 evenly spaced numbers from $-\pi$ to $\pi$:
```
x = np.linspace(- np.pi, np.pi, 0.1)
```

Now we actually define our function. Functions in Python are denoted by the 
keyword `def`. You then type a colon to signify that the body of the function 
is beginning. The function body must be indented by one tab; anything
un-indented is considered the outside of the function. So we can write 
```
def squared(x): 
  # not the same x as before!
  return x * x

# Note: multivariate functions can just be written with, say
def f(x, y): 
  ...
```

And, if we run `squared(x)` we should see the values of the function 
$y = x^2$ in the interval we specified. 

This should look something like `array([...])`. This is because Numpy converted 
our regular Python list to a Numpy array. Numpy does this automatically very 
often, but on occasion you'll have to convert that list to an array before 
doing some sort of operation by running: 
```
np.array([1, 2, 3])
```

This just converts that list to a Numpy array. 

Numpy arrays are great because they are really easy to do operations with: 
```
>>> np.array([1,2,3]) + np.array([1,2,3])
array([2, 4, 6])

>>> np.array([1,2,3]) - np.array([1,2,3])
array([0, 0, 0])

>>> np.array([1,2,3]) * np.array([1,2,3])
array([1, 4, 9])
```

That last one was element-wise multiplication. To perform matrix multiplication: 
```
>>> np.matmul(np.array([1,2,3]), np.array([1,2,3]))
14
```

where Numpy has interpreted this as a dot product. 

Matrices in Numpy are intuitive: 
```
>>> a = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

#                          [1, 2, 3]
# Equivalent to the matrix [4, 5, 6]
#                          [7, 8, 9]

>>> b = [[1,4,3],[1,5,6],[7,8,0]]

>>> np.matmul(a, b)
array([[ 24,  38,  15],
       [ 51,  89,  42],
       [ 78, 140,  69]])
```

We can transpose a matrix: 

```
>>> np.transpose(a)
array([[1, 4, 7],
       [2, 5, 8],
       [3, 6, 9]])
```

Add matrices (make sure to make these Numpy arrays otherwise Python will 
just put the two lists together!): 
```
>>> np.array(a) + np.array(b)
array([[ 2,  6,  6],
       [ 5, 10, 12],
       [14, 16,  9]])
```

### Scipy 
Scipy is a broader package that gives you a plethora of scientific computing 
tools. There are far too many functionalities to cover just today, so 
I'll just go over the most immediately useful ones. The rest can be found 
[here](https://docs.scipy.org/doc/scipy/reference/tutorial/index.html#user-guide).

We were just discussing some linear algebra adjacent applications, so let us 
continue down that route. We can import the linear algebra module: 
```
from scipy import linalg
```

Then we can, for example, find the determinant of a matrix:
```
>>> linalg.det(b)
39
```

We can find the inverse of a matrix: 
```
>>> linalg.inv(b)
array([[-1.23076923,  0.61538462,  0.23076923],
       [ 1.07692308, -0.53846154, -0.07692308],
       [-0.69230769,  0.51282051,  0.02564103]])
```

(Notice these are Numpy arrays. Numpy is affiliated with Scipy.)
We can solve for linear systems: 
```
>>> linalg.solve(b, [1, 2, 3])
array([ 0.69230769, -0.23076923,  0.41025641])
```

We also have an integration module which can solve differential equations 
and perform numerical integration: 
```
>>> integrate.quad(lambda x: np.cos(x) * np.cos(x), -np.pi, np.pi)
(3.1415926535897922, 2.305878948871502e-09)
```

where the first number is the result of the integration and the second is 
an error bound. That `lambda` expression is just a single-line function. It just 
returns whatever comes after the colon. We can also integrate using infinity as
a bound with `scipy.inf` (import using `from scipy import inf`). There's 
also double and triple integration, which you can read more about 
[here](https://docs.scipy.org/doc/scipy/reference/tutorial/integrate.html).


We can solve ordinary differential equation initial value problems. Suppose 
we want to solve (example taken from Scipy docs):
$$
\frac{d^2w}{dz^2} - zw(z) = 0
$$

This is a second-order differential equation, so we need two initial values, 
say $w(0)= 3$ and $w'(0)=0$. Before we give this to Scipy we need to convert it 
into a form that is interpretable by the module, so we separate the second 
order derivative and the function into two different functions and treat this 
as a system of first-order differential equations: 
$$
w'' = z w \text{ and } w' = w' 
$$

In matrix form:
$$
\frac{d}{dz}
\begin{bmatrix}
w' \\ w
\end{bmatrix}
=
\begin{bmatrix}
0 & -z\\ 
1 & 0 
\end{bmatrix}
\begin{bmatrix}
w' \\ w
\end{bmatrix}
$$

In code, we first define the initial conditions: 
```
w_0 = 3
w_prime_0 = 1
y_0 = [w_prime_0, w_0]
```

then define the differential equation in matrix form: 
```
def eqn(z, y):
    return [z * y[1], y[0]]
```

define the interval along which we will solve: 
```
interval = [0, 4]
```

give it some input values to evaluate: 
```
z = np.linspace(0, 4, 100)
```

and at last solve: 
```
>>> sol = integrate.solve_ivp(eqn, interval, y_0)
>>> sol.y[1]
array([  3.        ,   3.08613211,   4.33132688,   9.45655602,
        33.1858188 , 144.12447093, 298.0691259 ])
```

### Astropy 
Lastly, we will briefly cover Astropy. The main two things I'll show are: 
opening FITS files and converting between coordinate systems. 

To open FITS files, we use astropy's `fits` module:
```
from astropy.io import fits 
```

Then we open a file that is in the same directory, say, `./local_compare.fits`:
```
file = fits.getdata('./local_compare')
```

And it's that easy! Now we can access the, say, the first band (i.e., the 
first color) of the top-left pixel using 
```
fits[0][0][0]
```

FITS files also carry a header where metadata is stored. This includes how 
to translate between pixels and real-world coordinates. To access the 
header we can run 
```
hdr = fits.getheader('path/to/file')
```

Astropy's world coordinate system module lets us convert between pixels 
in a fits file and actual location in, say, right ascension and 
declination coordinates: 
```
from astropy.wcs import WCS
```

As mentioned above, headers often the necessary conversions. We can 
then make a new `WCS` coordinate converter using the header: 
```
wcs = WCS(hdr)
```

Now we can convert from pixel coordinates to world coordinates: 
```
sky = wcs.pixel_to_world(20, 20)
```

This is a `SkyCoord` object, not just two numbers. These are returned 
in this way because it facilitates converting between different coordinate 
unit systems or performing additional operations. See the 
Astropy [documentation](https://docs.astropy.org/en/stable/api/astropy.coordinates.SkyCoord.html). 
For example, we can produce the coordinates in hours-minutes-seconds units:
```
sky.to_string(style='hmsdms')
```

If we wanted to find the pixel coordinates from right ascension, declination 
coordinates, we can make a new `SkyCoord`: 
```
import astropy.units as u
from astropy.coordinates import SkyCoord  
c = SkyCoord(85.39, -2.577, unit=u.deg)
```

Astropy has a myriad of other functionalities such as generating cutouts 
of a specific object in a larger image, detecting objects, and much more. 
Again, see the [Astropy documentation](https://docs.astropy.org/en/stable/index.html)

### Misc Python Functionalities
Occasionally we may want to run a command once for every number in a list. 
We can use Python's for loops: 
```
>>> l = []
>>> for i in [1, 2, 3]:
>>>   l.append(i + 1)
>>> l
[2, 3, 4]
```

We might have data stored in a file somewhere, in which case we can use 
`open`: 
```
f = open('path/to/file', 'r') # 'r' says we're just gonna read the file
f.readlines() # a list of each line in the file!
```

### Further topics:
**Reading documentations**: computer scientists are compulsive documenters. 
Every (halfway decent) package you will use will have been documented 
extensively: these documentations will include technical details of functions, 
optional functionalities, finer settings, and examples. That said, docs can be 
very hard to read sometimes---they're often walls of text. While it might be 
difficult at first, I *promise* you will benefit from referring to
documentations. Reading docs is itself a skill, and, as with all skills,
it's something you will hone with practice. 

**APIs**: this one's for the astrophysics crowd: if you're working with data 
releases such as LegacySurvey or DECaLS or the SDSS, your life is going to be a 
lot easier if you learn how to use web APIs. This is a bit of a nuanced subject 
for an introductory lecture like this, so if you're interested please reach 
out to me and we can talk more. 

**CS courses useful for physicists:**
- **CSCI0190** or **CSCI0170** and/or **CSCI0180** (i.e., some intro course)
- **CSCI1951A** - Data Science
- **CSCI1380** - Distributed Computer Systems
- **CSCI2370** - Interdisciplinary Scientific Visualization (If you're interested in
  this kind of thing and want to learn more about the process of interdisciplinary
  research. It's a bit of a unique course and definitely not for everyone, so feel
  free to ask me about it!)
- **CSCI1710** - Logic for Systems (I've been *told* this is useful for physics
  simulations. I cannot confirm the degree to which this is true.)

**Non-CS courses that are computational:**
- **PHYS1600** - Computational Physics 
- **APMA0160** - Introduction to Scientific Computing