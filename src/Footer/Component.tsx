'use client'

import React from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {

  const forsiknerLinks = [
              'Bilforsikring',
              'Indboforsikring',
              'Rejseforsikring',
              'Sundhedsforsikring',
              'Ulykkesforsikring',
              'Børneulykkesforsikring',
              'Hundeforsikring',
              'Husforsikring',
              'Bygningsforsikring',
              'Sommerhusforsikring',
              'Motorcykelforsikring',
              'Campingvognsforsikring',
              'Veteranforsikring',
              'Knallertforsikring',
            ];



            const omAbcForskiLinks = ['Om os', 'Job & karriere', 'Presse', 'Kontakt', 'Nyhedsbrev']


            const otherLinks = ['Sikker Mail', 'Klage og ankenævn', 'Privatlivspolitik', 'Cookie politik']

  return (
    <footer className="bg-[#040f4e] text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
  
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Link href="#" className="bg-[#7f86e5] p-2 rounded">
              <Facebook size={20} />
            </Link>

            <Link href="#" className="bg-[#7f86e5] p-2 rounded">
              <Instagram size={20} />
            </Link>

            <Link href="#" className="bg-[#7f86e5] p-2 rounded">
              <Linkedin size={20} />
            </Link>
          </div>
          <div className="text-sm">
            <p>ABC Forsikringsagentur A/S</p>
            <p>Arne Jacobsens Allé 7, 2,</p>
            <p>2300 København S</p>
            <p>CVR: 36023244</p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Forsikringer</h4>
          <ul className="space-y-1 text-sm">
            {forsiknerLinks.map((item) => (
              <li key={item}>
                <Link href="#" className="hover:underline textsm text-gray-50" style={{fontWeight:400 }}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Om ABC Forsikring</h4>
          <ul className="space-y-1 text-sm">
            {omAbcForskiLinks.map((item) => (
              <li key={item}>
                <Link href="#" className="hover:underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ul className="space-y-1 text-sm">
            {otherLinks.map(
              (item) => (
                <li key={item}>
                  <Link href="#" className="hover:underline">
                    {item}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
