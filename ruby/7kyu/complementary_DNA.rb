# Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and 
# carries the "instructions" for the development and functioning of living 
# organisms.

# If you want to know more http://en.wikipedia.org/wiki/DNA

# In DNA strings, symbols "A" and "T" are complements of each other, as "C" 
# and "G". You have function with one side of the DNA (string, except for 
#   Haskell); you need to get the other complementary side. DNA strand is 
#   never empty or there is no DNA at all (again, except for Haskell).

# More similar exercise are found here 
# http://rosalind.info/problems/list-view/ (source)

# DNA_strand ("ATTGC") # return "TAACG"

# DNA_strand ("GTAT") # return "CATA"

# my initial solution
def DNA_strand(dna)
  complementary_strand = []
  dna.split("").each{ |codon|
    case codon
    when 'A'
      complementary_strand << 'T'
    when 'T'
      complementary_strand << 'A'
    when 'G'
      complementary_strand << 'C'
    when 'C'
      complementary_strand << 'G'
    end
  }
  complementary_strand.join("")
end

# most concise result from codewars
def DNA_strand(dna)
  dna.tr("ACTG", "TGAC")
end

puts DNA_strand("ATTGC") # return "TAACG"

# DNA_strand ("GTAT") # return "CATA"