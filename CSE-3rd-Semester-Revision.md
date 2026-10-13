# CSE Third-Semester Masterclass Revision Notes

## Scope and editorial conventions

These notes reorganize the supplied `fundamentle.pdf`, `digital.pdf`, `math.pdf`,
`e-com.pdf`, and `DSA.pdf`. The separate C-programming PDF was not used. Long,
language-specific C implementation listings in the DSA notes have also been omitted;
their underlying data-structure operations and algorithmic ideas are retained.

The E-Commerce PDF explicitly labels Units I-IV, so those labels are preserved.
The other PDFs mainly provide topic headings rather than an official unit-wise
syllabus; their material is grouped below into study units for revision and is not
presented as an independently verified university syllabus.

To avoid cross-subject duplication, number-system conversions, complements, and
binary arithmetic are organized under **Digital Electronics & Logic Design**.
Fundamentals retains the computer-system context but not a second copy of those
topics. Formula notation is normalized where PDF text extraction or the source
notes contain apparent transcription errors; corrections are noted in the
relevant sections.

---

# 1. Fundamental / Basic Engineering Concepts

## Unit 1 — Computer Fundamentals

### Computer system and IPO cycle

- A **computer** accepts data and instructions, processes them, produces useful
  information, and stores data/results.
- The basic **Input–Process–Output (IPO)** cycle:
  1. **Input unit:** accepts data and instructions and converts them to a
     machine-readable representation.
  2. **Central Processing Unit (CPU):** executes instructions and coordinates
     processing.
     - **Arithmetic Logic Unit (ALU):** arithmetic operations and logical
       comparisons.
     - **Control Unit (CU):** fetches and decodes instructions and coordinates
       data flow and hardware operation.
     - **Registers/cache:** very fast temporary storage for instructions, data,
       and intermediate results.
  3. **Output unit:** presents results in a human-usable form, such as text,
     graphics, audio, or video.
  4. **Secondary storage:** retains data and programs beyond immediate CPU
     processing.

### Characteristics and types of computers

- **Characteristics:** speed, accuracy (subject to correct input and
  instructions), diligence, storage capacity, and versatility.
- **Computer classes in the notes:**
  - **Microcomputers:** personal, usually single-user systems such as desktops,
    laptops, tablets, and phones.
  - **Minicomputers:** mid-range multi-user systems, historically used by
    departments and organizations.
  - **Mainframes:** high-throughput, reliable systems for large-scale
    transaction and data processing.
  - **Supercomputers:** massively parallel systems for computation-intensive
    scientific and engineering work.

### Programming-language levels and translators

- **Machine language:** binary instructions executed directly by the processor;
  machine-dependent and difficult to write.
- **Assembly language:** symbolic mnemonics translated by an **assembler**.
- **High-level language:** human-readable, generally more portable source code.
  A **compiler** translates a program as a whole; an **interpreter** translates
  and executes incrementally.

### Files, directories, and data organization

- **Data organization** structures and indexes stored information for efficient
  retrieval and maintenance.
- A **file** is a named collection of related information.
- A **directory/folder** hierarchically organizes files and subdirectories.
- A **drive** is a storage device or logical storage volume used to read and
  write data.

### Memory and storage

- **RAM:** volatile read/write main memory for currently active programs and
  data.
- **ROM:** non-volatile memory for persistent startup or system instructions.
- **PROM:** programmable once after manufacture.
- **EPROM:** erasable and reusable after exposure to ultraviolet light.
- **Secondary storage examples:** magnetic hard disks, optical CDs, and
  flash-based USB drives; the notes also describe floppy disks as obsolete.

### Input/output device examples

- **Input:** scanner (converts a physical image/document to digital form).
- **Output:** plotter (large or precise vector drawings) and displays such as
  LCD and plasma.

## Unit 2 — Algorithms and Flowcharts

### Algorithms

- An **algorithm** is a finite, unambiguous, effective sequence of steps that
  transforms defined input into output.
- Essential properties: **input**, **output**, **definiteness**, **finiteness**,
  and **effectiveness**.
- Advantages in the notes: stepwise clarity, language independence, and easier
  logic checking/debugging before implementation.
- Limitations: lengthy descriptions for large problems and less visual clarity
  for complex branching.
- Example problem model: read two values, compare them, report the larger, and
  terminate.

### Flowcharts

- A **flowchart** depicts the control and data flow of an algorithm using
  standard symbols connected by arrows.
- Common symbols:
  - **Oval / rounded rectangle:** Start or Stop.
  - **Parallelogram:** Input or Output.
  - **Rectangle:** Processing or assignment.
  - **Diamond:** Decision/branch.
  - **Arrow:** Direction of control flow.
  - **Circle connector:** Joins separated flowchart sections.
- Flowcharts support communication, logic analysis, and documentation; large
  charts can be cumbersome to modify and maintain.

## Unit 3 — Operating Systems, DOS, and Windows

### Operating-system role and services

- An **operating system (OS)** mediates between users/applications and computer
  hardware, manages resources, and controls program execution.
- Services listed in the notes: process management, memory management, file
  management, security, error detection, and resource allocation.

### DOS concepts

- DOS is described as a historical character-user-interface operating system
  for early personal computers.
- The notes trace MS-DOS to 86-DOS, developed by Tim Paterson in 1980,
  acquired and renamed by Microsoft, and released with IBM personal computers
  in 1981.
- Files are organized in a hierarchical directory tree with a root directory.
- System-file roles in the notes:
  - `IO.SYS`: basic input/output support.
  - `MSDOS.SYS`: system and file-access operations.
  - `COMMAND.COM`: command interpreter.
- **Internal commands** reside in the command processor (examples: `DIR`,
  `COPY`, `DEL`, `CD`, `MD`, `CLS`).
- **External commands** are separate utilities loaded when invoked (examples:
  `FORMAT`, `CHKDSK`, `XCOPY`, `TREE`).
- A **batch file** is a sequence of commands executed in order to automate
  repetitive tasks.

### OS types and Windows GUI

- OS types covered: **batch**, **time-sharing/multitasking**, **real-time**, and
  **distributed** operating systems.
- Windows is described as a GUI environment using windows, icons, menus, and a
  pointer. Features include multitasking, plug-and-play, file management, and
  networking.
- GUI concepts: **desktop**, **taskbar**, **Control Panel**, application
  windows, and icons. Examples of accessories include Notepad and Paint.

## Unit 4 — Editors and Office Applications

- **Text editor:** creates and edits plain, unformatted text.
- **Word processor:** creates, formats, saves, and prints rich documents.
  MS Word features covered include formatting, mail merge, spell/grammar
  checking, and templates.
- **Desktop publishing (DTP):** precise layout and typography for publications
  such as books, magazines, brochures, and flyers.
- **Spreadsheet (MS Excel):** organizes and analyzes tabular data and creates
  charts. Concepts include workbooks, worksheets, cells, and cell references.
  Functions listed: `SUM`, `AVERAGE`, `IF`, `VLOOKUP`, and `XLOOKUP`.
- **Database package (MS Access):** relational data management using tables,
  fields, records, and primary keys; other objects include queries, forms, and
  reports.
- **Multitasking/application switching:** running multiple applications;
  shortcuts in the notes include `Alt+Tab` and `Win+Tab`.
- **MS PowerPoint:** slide-based presentations with layouts, transitions,
  animations, and a Slide Master.

---

# 2. Digital Electronics & Logic Design

## Unit 1 — Number Systems and Boolean Algebra

### Positional number systems and conversion

- **Radix/base** is the number of distinct digits in a positional number
  system.
- **Binary (base 2):** `0, 1`; **octal (base 8):** `0–7`;
  **decimal (base 10):** `0–9`; **hexadecimal (base 16):** `0–9, A–F`.
- **Decimal integer to base r:** repeatedly divide by `r`; read remainders
  from last to first.
- **Decimal fraction to base r:** repeatedly multiply the fractional part by
  `r`; read the integer parts in order.
- **Base r to decimal:** sum each digit multiplied by its positional weight.
  For example, `(110100)₂ = 1·2⁵ + 1·2⁴ + 1·2² = (52)₁₀`.

### Complements

- The **(r−1)'s complement** is formed by subtracting each digit from `r−1`.
- The **r's complement** is the (r−1)'s complement plus one.
- Binary cases:
  - **1's complement:** invert every bit.
  - **2's complement:** invert every bit and add one.
- Complements support subtraction and signed binary representation.

### Boolean algebra and simplification

For binary variables, `+` denotes OR, `·` denotes AND, and an overbar denotes
NOT.

- Identity: `A + 0 = A`, `A·1 = A`.
- Domination: `A + 1 = 1`, `A·0 = 0`.
- Idempotence: `A + A = A`, `A·A = A`.
- Complement: `A + A̅ = 1`, `A·A̅ = 0`; involution: `A̅̅ = A`.
- Commutative, associative, and distributive laws apply to OR and AND.
- Absorption: `A + AB = A`, `A(A + B) = A`.
- De Morgan:
  - `(A + B)̅ = A̅B̅`
  - `(AB)̅ = A̅ + B̅`
- **Boolean minimization** reduces literals/gates, cost, and propagation delay.
- **Karnaugh maps (K-maps):** group adjacent 1-cells in powers of two; use
  the largest useful groups; edge wrapping and overlap are permitted. The
  notes' example `F(A,B,C)=Σm(0,2,4,5,6)` simplifies to
  `F = C̅ + AB̅`.

### Basic and universal gates

- Basic gates: AND, OR, NOT; compound gates include NAND, NOR, XOR, and XNOR.
- **NAND** and **NOR** are universal: each can be used alone to construct any
  Boolean function. For example, NAND with its inputs tied together acts as
  NOT; combinations implement AND and OR.
- Correct output equations: `NAND = (AB)̅`; `NOR = (A+B)̅`.

## Unit 2 — Combinational Logic Circuits

- A **combinational circuit** has outputs determined only by current inputs;
  it has no state storage or feedback.
- Analysis sequence: identify gates, derive intermediate/output Boolean
  expressions, form the truth table, and infer the circuit function.

### Arithmetic and comparison circuits

- **Half adder:** `Sum = A ⊕ B`; `Carry = AB`.
- **Full adder:** `Sum = A ⊕ B ⊕ Cᵢₙ`;
  `Cₒᵤₜ = AB + ACᵢₙ + BCᵢₙ`.
- **Half subtractor:** `Difference = A ⊕ B`;
  `Borrow = A̅B`.
- **Full subtractor:** `Difference = A ⊕ B ⊕ Bᵢₙ`;
  `Bₒᵤₜ = A̅B + (A ⊙ B)Bᵢₙ`, where `⊙` is XNOR.
- A **magnitude comparator** reports `A>B`, `A=B`, or `A<B`.
  One-bit equality is `A̅B̅ + AB = A XNOR B`.

### Encoders, decoders, multiplexers, and implementation

- An **n-to-2ⁿ decoder** activates the output corresponding to its n-bit input;
  an **encoder** maps an active input line to a binary code.
- A **multiplexer (MUX)** selects one of many inputs for one output. For a 4:1
  MUX:
  `Y = S̅₁S̅₀D₀ + S̅₁S₀D₁ + S₁S̅₀D₂ + S₁S₀D₃`.
- A **demultiplexer (DEMUX)** routes one input to one of 2ⁿ outputs according
  to select lines.
- Switching functions can be implemented with decoder minterms and an OR
  stage, or with a MUX whose select/data inputs encode the function.
- **PLDs:** a **PLA** has programmable AND and OR arrays; a **PAL** has a
  programmable AND array and fixed OR array.
- **Tri-state logic:** outputs can be 0, 1, or high impedance (`High-Z`), which
  permits controlled sharing of a data bus.

## Unit 3 — Sequential Circuits, Flip-Flops, Registers, and Counters

- **Sequential-circuit output** depends on present inputs and stored state;
  feedback and memory elements distinguish it from combinational logic.
- **Synchronous** state changes are synchronized to a clock; **asynchronous**
  changes respond directly to inputs.
- **Latch:** level-triggered storage; output can follow input while enabled.
- **Flip-flop:** edge-triggered storage; state changes at the active clock edge.

### Flip-flops

- **SR:** `Q⁺ = S + R̅Q`; `S=R=1` is forbidden for the basic SR device.
  Input `00` holds, `01` resets, and `10` sets.
- **JK:** `Q⁺ = JQ̅ + K̅Q`; `00` holds, `01` resets, `10` sets, `11` toggles.
- **D:** `Q⁺ = D`.
- **T:** `Q⁺ = T ⊕ Q`; `T=0` holds and `T=1` toggles.
- Characteristic tables describe next state from current state/inputs;
  excitation tables specify inputs required for a desired state transition.

### State machines and sequential components

- Clocked-circuit analysis: derive flip-flop input equations, derive
  next-state equations, construct a state table, and draw a state diagram.
- **State reduction** removes behaviorally equivalent states.
- **State assignment** maps symbolic states to binary codes; Gray-like
  assignments can reduce changes between adjacent states.
- Synchronous design flow: specification → state diagram → state table →
  state assignment → flip-flop/excitation choice → K-map simplification and
  circuit implementation.
- **Shift registers:** SISO, SIPO, PISO, and PIPO, classified by serial or
  parallel input/output.
- **Ripple (asynchronous) counter:** each stage triggers the next; accumulated
  propagation delay limits speed.
- **Synchronous counter:** all flip-flops share the clock, avoiding cumulative
  ripple delay.

## Unit 4 — Digital ICs and Logic Families

- A **digital integrated circuit (IC)** fabricates many electronic components
  on one semiconductor chip. Benefits include compact size, reliability, and
  mass-production cost/power advantages.
- Performance terms:
  - **Propagation delay (`tₚd`):** input-to-output response time.
  - **Power dissipation (`Pᴅ`):** power consumed.
  - **Fan-out:** number of standard inputs an output can drive reliably.
  - **Noise margin:** tolerable noise before a logic-level error.
  - **Figure of merit:** `FOM = tₚd × Pᴅ`; lower values indicate a
    speed/power trade-off improvement.
- Logic families covered:
  - **RTL:** resistor/BJT; early, slow, higher-power, low fan-out.
  - **DTL:** diode input logic and transistor stage; improved over RTL, with
    diode storage limiting speed.
  - **TTL:** transistor-based; commonly associated with 5 V logic and a balance
    of speed, fan-out, and cost.
  - **ECL:** non-saturated current-steering transistors; very fast but high
    power.
  - **MOS/CMOS:** MOSFET-based; CMOS combines NMOS/PMOS, offers high density,
    strong noise margins, and very low static power.
- The PDF provides approximate family comparison values; actual delay, power,
  fan-out, noise margin, and supply voltage depend on the particular IC family.
  Indicative values printed in the notes are:
  | Family | Delay | Power | Fan-out | Noise margin | Supply |
  |---|---:|---:|---:|---:|---:|
  | RTL | ≈12 ns | ≈12 mW | ≈5 | ≈0.2 V | 3 V |
  | DTL | ≈30 ns | ≈10 mW | ≈8 | ≈0.4 V | 5 V |
  | TTL | ≈10 ns | ≈10–20 mW | ≈10 | ≈0.4 V | 5 V |
  | ECL | ≈1–2 ns | ≈25–50 mW | ≈25 | ≈0.25 V | −5.2 V |
  | CMOS | ≈2–10 ns | near-zero static / moderate dynamic | ≈50+ | ≈40% of `VDD` | 3–15 V |

> **Formula corrections:** The source text extraction appears to mislabel NAND
> and NOR output levels and gives one-bit equality as XOR. The correct equations
> above are `(AB)̅`, `(A+B)̅`, and `A XNOR B`, respectively. The full-subtractor
> borrow expression is also written in its standard equivalent form.

---

# 3. Engineering Mathematics

## Unit 1 — Trigonometry and Complex Numbers

### Trigonometry

- Trigonometric functions for arbitrary angles are interpreted on the unit
  circle. The **ASTC** sign rule: all ratios positive in quadrant I; sine and
  cosecant in II; tangent and cotangent in III; cosine and secant in IV.
- Periodicity allows reduction of large angles by full rotations (e.g.,
  `765° = 2·360° + 45°`).
- Compound-angle formulae:
  - `sin(A±B) = sinA cosB ± cosA sinB`
  - `cos(A+B) = cosA cosB − sinA sinB`
  - `cos(A−B) = cosA cosB + sinA sinB`
  - `tan(A+B) = (tanA + tanB)/(1 − tanA tanB)`
- Double-angle formulae:
  - `sin 2A = 2 sinA cosA`
  - `cos 2A = cos²A − sin²A = 2cos²A−1 = 1−2sin²A`
  - `tan 2A = 2tanA/(1−tan²A)`
- Inverse circular functions return principal angles. Properties included in
  the notes:
  - `sin⁻¹(sin x)=x` for `−π/2 ≤ x ≤ π/2`.
  - `tan⁻¹x + cot⁻¹x = π/2`.
  - `sin⁻¹(−x)=−sin⁻¹x`; `cos⁻¹(−x)=π−cos⁻¹x`.

### Complex numbers

- Standard form: `z=x+iy`, with `i²=−1`; `x` is the real part and `y` the
  imaginary part.
- Conjugate: if `z=x+iy`, then `z̅=x−iy` and `zz̅=x²+y²`.
- Addition combines real and imaginary parts; multiplication follows
  `(a+ib)(c+id)=(ac−bd)+i(ad+bc)`. Divide by multiplying numerator and
  denominator by the denominator's conjugate.
- Modulus: `|z|=r=√(x²+y²)`. Argument `θ` is selected using the point's
  quadrant (not just the principal value of `tan⁻¹(y/x)`).
- Polar/Euler form: `z=r(cosθ+i sinθ)=reⁱᶿ`; the Argand-plane representation
  is the vector `(x,y)`.
- **De Moivre's theorem:**
  `(cosθ+i sinθ)ⁿ = cos(nθ)+i sin(nθ)`.
  For `z=r(cosθ+i sinθ)`, its nth roots are
  `r^(1/n)[cos((θ+2kπ)/n)+i sin((θ+2kπ)/n)]`,
  for `k=0,1,…,n−1`.

## Unit 2 — Matrices, Determinants, and Linear Systems

- Matrix order is rows × columns. Types covered: row, column, square,
  diagonal, scalar, identity, zero, upper triangular, and lower triangular.
- Addition/subtraction require equal orders and operate elementwise.
  Scalar multiplication multiplies every entry by the scalar.
- Matrix product: if `A` is `m×n` and `B` is `n×p`, then `AB` is `m×p` and
  `cᵢⱼ = Σₖ aᵢₖbₖⱼ`; in general `AB ≠ BA`.
- Transpose exchanges rows and columns:
  `(Aᵀ)ᵀ=A`, `(A+B)ᵀ=Aᵀ+Bᵀ`, `(AB)ᵀ=BᵀAᵀ`.
- **Symmetric:** `Aᵀ=A`; **skew-symmetric:** `Aᵀ=−A` (diagonal entries
  are zero). Decomposition:
  `A = ½(A+Aᵀ) + ½(A−Aᵀ)`.
- **Orthogonal matrix:** `AAᵀ=AᵀA=I`, hence `A⁻¹=Aᵀ` and `det(A)=±1`.
- **Determinant:** scalar associated with a square matrix. A matrix is
  nonsingular when `det(A)≠0`.
- **Inverse:** `AA⁻¹=A⁻¹A=I`; for nonsingular `A`,
  `A⁻¹ = adj(A)/det(A)`.
- **Rank:** number of linearly independent rows/columns; equivalently, the
  number of nonzero rows in row-echelon form.
- Linear systems:
  - **Cramer's rule:** for `AX=b`, `xᵢ=det(Aᵢ)/det(A)` when `det(A)≠0`.
  - **Gaussian elimination:** use elementary row operations to reach
    echelon form, then solve by back-substitution.
- **Eigenvalues/eigenvectors:** eigenvalues satisfy `det(A−λI)=0`;
  corresponding eigenvectors satisfy `(A−λI)X=0`.

## Unit 3 — Differential Calculus

### Limits, continuity, and differentiability

- `limₓ→c f(x)=L` means `f(x)` approaches `L` as `x` approaches `c`.
- Standard limits in the notes:
  - `limₓ→0 sin x/x = 1`
  - `limₓ→0 (eˣ−1)/x = 1`
  - `limₓ→0 ln(1+x)/x = 1`
  - `limₓ→a (xⁿ−aⁿ)/(x−a) = n aⁿ⁻¹`
- A function is continuous at `c` if `f(c)` exists, the two-sided limit
  exists (left and right limits agree), and `limₓ→c f(x)=f(c)`.
- Derivative definition:
  `f′(c)=limₕ→0 [f(c+h)−f(c)]/h`.
  Differentiability implies continuity; continuity alone does not imply
  differentiability.

### Differentiation

- Sum/difference: `(u±v)′=u′±v′`.
- Product: `(uv)′=uv′+vu′`.
- Quotient: `(u/v)′=(vu′−uv′)/v²`.
- Chain rule: `dy/dx=(dy/du)(du/dx)`.
- Standard derivatives:
  - `(xⁿ)′=nxⁿ⁻¹`; `(eˣ)′=eˣ`; `(aˣ)′=aˣ ln a`; `(ln x)′=1/x`.
  - `(sin x)′=cos x`; `(cos x)′=−sin x`; `(tan x)′=sec²x`.
  - `(sin⁻¹x)′=1/√(1−x²)`; `(tan⁻¹x)′=1/(1+x²)`.

### Tangents, normals, maxima, and minima

- At `(x₁,y₁)`, tangent slope `m=f′(x₁)`.
- Tangent: `y−y₁=m(x−x₁)`.
- Normal (for finite nonzero tangent slope): `y−y₁=−(1/m)(x−x₁)`.
- For local extrema, find critical points from `f′(c)=0`; then:
  - `f″(c)<0`: local maximum.
  - `f″(c)>0`: local minimum.
  - `f″(c)=0`: test is inconclusive.

## Unit 4 — Integral Calculus and Multiple Integrals

### Indefinite and definite integrals

- Integration reverses differentiation:
  if `F′(x)=f(x)`, then `∫f(x)dx=F(x)+C`.
- Standard forms:
  - `∫xⁿdx = xⁿ⁺¹/(n+1)+C` (`n≠−1`).
  - `∫dx/x = ln|x|+C`.
  - `∫eˣdx=eˣ+C`; `∫aˣdx=aˣ/ln(a)+C`.
  - `∫sin x dx=−cos x+C`; `∫cos x dx=sin x+C`;
    `∫sec²x dx=tan x+C`.
  - `∫dx/√(a²−x²)=sin⁻¹(x/a)+C`;
    `∫dx/(a²+x²)=(1/a)tan⁻¹(x/a)+C`.
- **Substitution:** set `u=g(x)`, `du=g′(x)dx`, integrate in `u`, then
  substitute back.
- **Integration by parts:** `∫u dv = uv−∫v du`. The notes give **ILATE**
  (Inverse trigonometric, Logarithmic, Algebraic, Trigonometric, Exponential)
  as a guide for selecting `u`.
- **Partial fractions:** decompose a rational function into simpler fractions
  before integrating.
- **Fundamental theorem of calculus:**
  `∫ₐᵇ f(x)dx=F(b)−F(a)` for an antiderivative `F`.
- Definite-integral properties covered:
  - Reflection / King's substitution `x→a+b−x` (the PDF lists the same
    substitution under both names).
  - Even function: `∫₋ₐᵃ f(x)dx=2∫₀ᵃ f(x)dx`.
  - Odd function: `∫₋ₐᵃ f(x)dx=0`.

### Double/triple integrals and applications

- Double integral over a region: `∬R f(x,y)dA`, evaluated as an iterated
  integral.
- Triple integral over a volume: `∭V f(x,y,z)dV`.
- Area under `y=f(x)` from `a` to `b`: `A=∫ₐᵇ f(x)dx` when the curve is
  nonnegative on the interval.
- Disk method for revolution around the x-axis:
  `V=π∫ₐᵇ [f(x)]²dx`.

## Unit 5 — Vector Calculus

- A vector has magnitude and direction. In 3D,
  `A = Aₓî + Aᵧĵ + A_zk̂` and
  `|A|=√(Aₓ²+Aᵧ²+A_z²)`.
- Unit vector in the direction of nonzero `A`:
  `Â=A/|A|`.
- Vectors are **linearly independent** if
  `c₁v₁+⋯+cₙvₙ=0` has only the trivial solution; otherwise they are
  dependent. Three 3D vectors are coplanar when their scalar triple product
  (component determinant) is zero.
- Dot product:
  `A·B=|A||B|cosθ=AₓBₓ+AᵧBᵧ+A_zB_z`.
  Nonzero vectors are perpendicular iff `A·B=0`.
- Cross product:
  `A×B=|A||B|sinθ n̂`, evaluated by the 3×3 determinant with unit vectors
  in the first row. Nonzero vectors are parallel iff `A×B=0`.
- Del operator:
  `∇=î∂/∂x + ĵ∂/∂y + k̂∂/∂z`.
  - Gradient: `∇φ = î(∂φ/∂x)+ĵ(∂φ/∂y)+k̂(∂φ/∂z)`.
  - Divergence: `∇·V = ∂V₁/∂x + ∂V₂/∂y + ∂V₃/∂z`.
    A field with zero divergence is **solenoidal**.
  - Curl: `∇×V`, given by the standard determinant form. A field with zero
    curl is **irrotational**.
- Interpretations: gradient points toward greatest increase; divergence
  measures net outward flux/source strength; curl measures local rotational
  tendency.

> **Formula corrections:** The PDF text extraction drops radicals from the
> standard derivatives/integrals of inverse-sine forms. The standard correct
> forms with square roots are used above.

---

# 4. E-Commerce & Applications

## Unit I — E-Commerce Foundations and Business Models

### Definition, evolution, and distinguishing features

- **E-Commerce** is digitally enabled commercial exchange of value between
  individuals or organizations, primarily using ICT, the Internet, and the Web.
- Evolution in the notes:
  - **Innovation (1995–2000):** commercialization and storefront/infrastructure
    building.
  - **Consolidation (2001–2006):** profitability, brands, and multichannel
    strategies.
  - **Reinvention (2007 onward):** social, mobile, local, cloud, and
    on-demand commerce.
- Compared with traditional commerce, e-commerce extends reach globally and
  continuously, lowers search/transaction frictions, and delivers rich digital
  information.
- Technology features: **ubiquity**, **global reach**, **universal standards**,
  **information richness**, **interactivity**, **information density**, and
  **personalization/customization**.

### Business models

- A **business model** explains how an organization creates, delivers, and
  captures value. Elements:
  1. Value proposition.
  2. Revenue model (sales, subscription, advertising, transaction fee,
     affiliate, etc.).
  3. Market opportunity / total addressable market.
  4. Competitive environment.
  5. Competitive advantage.
  6. Market strategy.
  7. Organizational development.
  8. Management team.
- **B2C models:** e-tailer, community provider, content provider, portal,
  transaction broker, market creator, and service provider.
- **B2B models:** net marketplaces (e-distributors, exchanges, industrial
  consortia) and private industrial networks/private trading exchanges.
- Emerging forms: **social**, **mobile (M-commerce)**, **local**, and
  **on-demand/gig-economy** commerce.
- Business effects: reduced information asymmetry, **disintermediation** of
  traditional intermediaries, **re-intermediation** by digital platforms,
  network effects, and increased operating speed/agility.

## Unit II — E-Commerce Infrastructure and Website Development

### Internet and Web

- The **Internet** is interconnected networks using the TCP/IP protocol suite.
- **Packet switching** divides data into packets routed independently and
  reassembled at the destination.
- **IP** addresses/routes packets; **TCP** sequences data and handles reliable
  delivery/error recovery.
- **Client-server architecture:** clients request resources/services from
  servers.
- Contemporary infrastructure topics: broadband, fiber/4G/5G/satellite,
  cloud computing, IoT integration, and IPv6.
- The **World Wide Web** is a linked information space accessed over the
  Internet; resources use URLs. Web foundations: HTTP/HTTPS, HTML, browsers,
  and web servers.

### Website development and hosting

- E-commerce SDLC:
  1. **Analysis/planning:** business goals, functions, requirements.
  2. **Design:** logical flows/security and physical hardware/software,
     database, and network decisions.
  3. **Build:** in-house, outsourced, or platform/SaaS implementation.
  4. **Test:** unit, system, load, and security testing.
  5. **Implement/maintain:** deploy, monitor, analyze, and update.
- Server/platform options in the notes: Apache/Nginx; self-hosted platforms
  such as WooCommerce/Magento; SaaS platforms such as Shopify/BigCommerce.
- Hardware considerations: CPU, RAM, SSD/NVMe storage; **load balancing** and
  elastic cloud scaling for variable traffic.
- Supporting tools: payment gateways, SSL/TLS certificates, web analytics,
  CRM, and inventory-management systems.

## Unit III — E-Commerce Security

### Security goals and threats

- Six security dimensions: **integrity**, **non-repudiation**, **authenticity**,
  **confidentiality**, **privacy**, and **availability**.
- Security must be balanced with user convenience and system performance.
- Threat categories:
  - Malicious software: viruses, worms, Trojan horses, ransomware, spyware,
    and adware.
  - Network/infrastructure attacks: DoS/DDoS, sniffing, and
    man-in-the-middle attacks.
  - Application/social attacks: phishing/social engineering, SQL injection,
    and cross-site scripting (XSS).

### Security controls and trust

- **Symmetric encryption:** same key encrypts and decrypts; efficient but key
  distribution must be protected.
- **Asymmetric encryption:** public/private key pair.
- **TLS/SSL:** secures browser-server communications; asymmetric cryptography
  supports session-key exchange, and symmetric encryption protects session
  traffic.
- **Firewalls** filter traffic; **IDS/IPS** detect and/or block suspicious
  behavior.
- Organizational controls: security policies, risk assessment, PCI-DSS for
  payment-card handling, and applicable data-protection rules (including GDPR
  and local laws).
- **Digital signatures:** hash the message, sign the hash with the sender's
  private key, and verify with the corresponding public key and a recomputed
  hash. This supports authenticity, integrity, and non-repudiation.
- **PKI / Certificate Authorities:** trusted CAs issue certificates binding a
  public key to an identity; certificates include identity/key details,
  validity information, serial number, and the CA's signature.

## Unit IV — Payments, Privacy, and Intellectual Property

### Electronic payment systems

- An **electronic payment system (EPS)** transfers funds between buyer and
  seller over communication networks.
- Evolution: traditional electronic transfers (wire/ACH), card-based online
  payments, then digital wallets and real-time account-to-account rails.
- Credit-card participants: cardholder, merchant, acquiring bank, issuing bank,
  payment gateway, and payment network.
- Transaction lifecycle: order/card entry → gateway encryption and
  authorization request → acquiring-bank/network routing → issuer validation
  and authorization hold → clearing/settlement → merchant payout.
- B2C methods:
  - Debit cards.
  - Digital/mobile wallets (often tokenized).
  - Account-to-account/instant payment systems (e.g. UPI).
  - Buy Now, Pay Later (BNPL).
  - Stored-value/prepaid cards.
- B2B payment characteristics: higher values, invoicing/credit terms such as
  Net 30/60/90, purchase orders, and multi-step approvals.
- B2B instruments: ACH/EFT, wire transfers (e.g. SWIFT/Fedwire), purchasing
  cards, digital payment networks, e-invoicing, and escrow.

### Privacy and information rights

- E-commerce data can include browsing/purchase history, location, device IDs,
  and demographics. Risks include opaque profiling, unauthorized sharing,
  retargeting, discriminatory dynamic pricing, and breaches.
- Fair Information Practice principles:
  1. **Notice/awareness.**
  2. **Choice/consent.**
  3. **Access/participation** (view, correct, or request deletion).
  4. **Integrity/security.**
  5. **Enforcement/redress.**

### Intellectual property rights

- **Copyright:** protects original literary, artistic, musical, dramatic, and
  software works; online concerns include copying, distribution, and DRM.
- **Trademark:** protects identifying words, logos, phrases, and designs.
  Risks include domain-name disputes, cybersquatting, and typosquatting.
- **Patent:** time-limited exclusive rights for qualifying novel, useful, and
  non-obvious inventions/processes, including some e-commerce technologies and
  business methods.

---

# 5. Data Structures and Algorithms (DSA)

## Unit 1 — Foundations and Algorithm Analysis

- **Data abstraction** exposes the essential operations while hiding
  implementation details: the abstract level describes what a structure does;
  the concrete level describes how it is represented.
- Distinguish:
  - **Data type:** values and permitted operations.
  - **Data object:** a concrete instance/value in storage.
  - **Data structure:** an organization of data supporting efficient use.
  - **Abstract data type (ADT):** mathematical specification of data and
    operations independent of implementation.
- An **algorithm** is a finite, definite, effective sequence mapping input to
  output. Core properties: input, output, definiteness, finiteness,
  effectiveness.
- **Algorithm analysis** studies resource growth with input size `n`, rather
  than relying on wall-clock time or a particular machine.
- Asymptotic bounds:
  - `f(n)=O(g(n))`: asymptotic upper bound; `f(n)≤c·g(n)` for sufficiently
    large `n`.
  - `f(n)=Ω(g(n))`: asymptotic lower bound; `c·g(n)≤f(n)` for sufficiently
    large `n`.
  - `f(n)=Θ(g(n))`: tight bound; bounded above and below by constant multiples.
- These notations describe bounds; they are **not inherently synonymous** with
  worst, best, or average cases. State which case is being analyzed.
- Growth order in the notes: `1`, `log n`, `n`, `n log n`, `n²`, `n³`,
  `2ⁿ`, `n!`.
- Time complexity counts basic operations. Examples: a single loop is `O(n)`,
  nested `n×n` loops are `O(n²)`, and repeatedly doubling a value gives
  `O(log n)`.
- Space complexity separates fixed space from input-dependent/auxiliary space.
  Iterative array summation uses `O(1)` auxiliary space; recursive factorial
  uses `O(n)` call-stack space.

## Unit 2 — Arrays and Sparse Matrices

- Arrays store homogeneous elements contiguously.
- One-dimensional address:
  `Address(A[i]) = B + W(i−LB)`,
  where `B` is base address, `W` is element width, and `LB` is the lower bound.
- Two-dimensional row-major address:
  `Address(A[i][j]) = B + W[(i−Lᵣ)N𝚌 + (j−L𝚌)]`.
- Two-dimensional column-major address:
  `Address(A[i][j]) = B + W[(j−L𝚌)Nᵣ + (i−Lᵣ)]`.
- A **sparse matrix** has mostly zero values; compact representations store only
  meaningful entries.
- Structured matrices:
  - Lower triangular: `n(n+1)/2` nonzero positions. The notes give
    row-major vector index `i(i−1)/2 + (j−1)` for 1-based `i≥j`.
  - Upper triangular: `n(n+1)/2` nonzero positions. For 1-based `i≤j`, the
    notes give vector index
    `(i−1)n − ((i−1)(i−2))/2 + (j−i)`.
  - Tridiagonal: `3n−2` nonzero positions; only main, upper, and lower
    diagonals are stored. In the notes' 0-based compact vector, for 1-based
    matrix indices: lower diagonal (`i−j=1`) maps to `i−2`; main diagonal
    (`i=j`) to `(n−1)+(i−1)`; upper diagonal (`i−j=−1`) to
    `(2n−1)+(i−1)`.
- General sparse matrix **3-tuple representation** stores `(row, column,
  value)` for each nonzero item, plus matrix dimensions and nonzero count.

## Unit 3 — Stacks, Queues, and Linked Lists

### Stacks

- **Stack:** linear LIFO structure; insertion/removal occur at the top.
- Operations: `push`, `pop`, `peek/top`, `isEmpty`, and (for bounded storage)
  `isFull`; basic top operations are `O(1)`.
- Applications: expression conversion/evaluation, call-stack management,
  undo, parenthesis matching, backtracking, and DFS.
- Expression notation:
  - Infix: operator between operands (`A+B`).
  - Prefix: operator before operands (`+AB`).
  - Postfix: operator after operands (`AB+`).
- Postfix evaluation: scan left-to-right; push operands; for an operator,
  pop the right operand then left operand, evaluate, and push the result.
- Infix-to-postfix conversion uses an operator stack and precedence:
  exponentiation highest/right-associative, then multiplication/division,
  then addition/subtraction. Parentheses govern popping.

### Queues

- **Queue:** linear FIFO structure; enqueue at rear, dequeue at front.
- Operations: enqueue, dequeue, peek, and empty/full tests.
- A linear array queue can waste freed front positions after the rear reaches
  the end; a **circular queue** reuses those positions.
- **Deque:** insertion/deletion at either end; may be input-restricted or
  output-restricted.
- **Priority queue:** removal is governed by priority rather than arrival
  order.

### Linked lists

- A **linked list** consists of nodes connected by references; nodes need not
  occupy contiguous memory.
- Types: singly linked, circular, and doubly linked.
- Core conceptual operations: create/initialize, traverse, insert at beginning
  or end, delete, and search.
- Applications: dynamic-size collections, stack/queue implementations, graph
  adjacency lists, polynomial representation, and browser-history navigation.

## Unit 4 — Trees and Graphs

### Trees

- A **tree** is a hierarchical node structure with a root and parent/child
  relationships. Terms: root, parent, child, leaf, internal node, height, and
  depth/level.
- Binary-tree depth-first traversals:
  - **Inorder:** left → root → right (ascending keys in a BST).
  - **Preorder:** root → left → right.
  - **Postorder:** left → right → root.
- **Binary Search Tree (BST):** left-subtree keys are smaller and right-subtree
  keys are larger than the node key; supports recursive insertion, traversal,
  and search.
- **AVL tree:** self-balancing BST; balance factor
  `height(left)−height(right)` must be `−1`, `0`, or `+1`.
- Rebalancing rotations: **LL** (right rotation), **RR** (left rotation),
  **LR** (left then right), and **RL** (right then left).

### Graphs

- A graph is `G=(V,E)`, with vertices and edges. Concepts include directed and
  undirected edges, weighted graphs, degree/in-degree/out-degree, paths, and
  cycles.
- **Adjacency matrix:** `|V|×|V|`, `O(V²)` space; suitable for dense graphs.
- **Adjacency list:** neighbors stored per vertex, `O(V+E)` space; suitable
  for sparse graphs.
- **BFS:** level-by-level exploration using a queue; useful for shortest paths
  in unweighted graphs.
- **DFS:** explores deeply before backtracking, using a stack or recursion;
  used for cycle detection, topological sorting, and maze exploration.
- **Minimum spanning tree (MST):** connects all vertices in a connected,
  undirected, weighted graph with minimum total edge weight and no cycles.
  - **Kruskal:** add lowest-weight edges while rejecting cycles (DSU).
  - **Prim:** grow a tree by adding a minimum edge to an unvisited vertex.

## Unit 5 — Sorting, Searching, and Hashing

### Sorting

- **Internal sorting:** all data fits in main memory.
- **External sorting:** data exceeds RAM and is processed from secondary
  storage; external merge sort is a foundational approach.
- **Heap sort:** build a max-heap, move the root maximum to the end, shrink
  the heap, and heapify; `O(n log n)` time, `O(1)` auxiliary space.
- **Merge sort:** divide, recursively sort, and merge; `O(n log n)` time,
  `O(n)` auxiliary space.
- **Quick sort:** select a pivot, partition, recursively sort partitions;
  average/best `O(n log n)`, worst `O(n²)`, recursion space typically
  `O(log n)` on balanced partitions.
- **Radix sort:** stable digit-wise sorting (LSD to MSD in the notes);
  `O(d(n+b))`, where `d` is digit count and `b` is base.

### Searching

- **Linear search:** works on sorted or unsorted data; best `O(1)`,
  average/worst `O(n)`.
- **Binary search:** requires sorted data; repeatedly halves the interval;
  `O(log n)`. Midpoint can be computed as
  `low + (high−low)/2`.

### Hashing

- **Hashing** maps keys to table indices; average retrieval is near `O(1)` with
  a well-distributed hash function.
- A good hash function is simple to calculate and distributes keys uniformly.
- Methods covered:
  - Division: `h(K)=K mod M` (prime `M` is often preferred).
  - Multiplication: `h(K)=⌊M·(K·A mod 1)⌋`, `0<A<1`.
  - Mid-square: square the key and use selected middle digits.
- A **collision** occurs when distinct keys map to the same index.
  - **Separate chaining:** each table slot references a list of entries.
  - **Linear probing:** `(h(K)+i) mod M`; may cause primary clustering.
  - **Quadratic probing:** `(h(K)+c₁i+c₂i²) mod M`.
  - **Double hashing:** `(h₁(K)+i·h₂(K)) mod M`.

---

## Final subject-placement check

- Computer-system hardware, memory, OS, flowcharts, and office tools are kept
  under **Fundamental / Basic Engineering Concepts**.
- Number bases, complements, Boolean laws, logic gates, and digital circuits
  appear only under **Digital Electronics & Logic Design**.
- Calculus, algebra, matrices, and vectors appear only under **Engineering
  Mathematics**.
- Internet commerce, platforms, security, payments, privacy, and digital IPR
  appear only under **E-Commerce & Applications**.
- ADTs, complexity, arrays, lists, stacks, queues, trees, graphs, sorting,
  searching, and hashing appear only under **DSA**.
- C source listings were not copied into the revision document; the data
  structures and algorithmic procedures represented by them remain in the DSA
  sections.
