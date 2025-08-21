import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, Globe, Timer, Thermometer, Wind, Moon, Weight } from 'lucide-react';
import { Planet } from '@/data/solarSystem';

interface SunData {
  id: string;
  name: string;
  radius: number;
  color: string;
  temperature: string;
  mass: string;
  age: string;
  description: string;
  facts: string[];
  wikipediaUrl: string;
}

interface PlanetInfoCardProps {
  celestialBody: {
    type: 'planet' | 'sun';
    data: Planet | SunData;
  } | null;
  onClose: () => void;
}

const PlanetInfoCard: React.FC<PlanetInfoCardProps> = ({ celestialBody, onClose }) => {
  if (!celestialBody) return null;

  const { type, data } = celestialBody;
  const isPlanet = type === 'planet';

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-6 right-6 z-50 w-96 max-h-[80vh] overflow-y-auto"
      >
        <Card className="bg-card/95 backdrop-blur-lg border-border cosmic-glow">
          <CardHeader className="relative pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: data.color }}
                />
                {data.name}
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="h-8 w-8 p-0 hover:bg-muted"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-muted-foreground mt-2">{data.description}</p>
          </CardHeader>

           <CardContent className="space-y-6">
            {isPlanet && (
              <>
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                    <Moon className="h-4 w-4 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Moons</p>
                      <p className="font-semibold">{(data as Planet).moons}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                    <Weight className="h-4 w-4 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Gravity</p>
                      <p className="font-semibold">{(data as Planet).gravity} m/s²</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                    <Timer className="h-4 w-4 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Day Length</p>
                      <p className="font-semibold text-xs">{(data as Planet).dayLength}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                    <Globe className="h-4 w-4 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Year Length</p>
                      <p className="font-semibold text-xs">{(data as Planet).yearLength}</p>
                    </div>
                  </div>
                </div>

                {/* Detailed Information */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Thermometer className="h-4 w-4 text-primary" />
                      Temperature
                    </h4>
                    <Badge variant="secondary">{(data as Planet).temperature}</Badge>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Wind className="h-4 w-4 text-primary" />
                      Atmosphere
                    </h4>
                    <Badge variant="secondary">{(data as Planet).atmosphere}</Badge>
                  </div>
                </div>
              </>
            )}

            {/* Sun specific info */}
            {!isPlanet && (
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center gap-2 p-3 bg-solar/10 rounded-lg border border-solar/20">
                  <Thermometer className="h-4 w-4 text-solar" />
                  <div>
                    <p className="text-xs text-muted-foreground">Temperature</p>
                    <p className="font-semibold text-solar">{(data as SunData).temperature}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-3 bg-solar/10 rounded-lg border border-solar/20">
                  <Weight className="h-4 w-4 text-solar" />
                  <div>
                    <p className="text-xs text-muted-foreground">Mass</p>
                    <p className="font-semibold text-solar">{(data as SunData).mass}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Interesting Facts */}
            <div>
              <h4 className="font-semibold mb-3">Interesting Facts</h4>
              <ul className="space-y-2">
                {data.facts.map((fact: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{fact}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Button 
              className="w-full cosmic-glow"
              onClick={() => {
                console.log('Button clicked for:', data.name);
                console.log('Wikipedia URL:', data.wikipediaUrl);
                if (data.wikipediaUrl) {
                  window.open(data.wikipediaUrl, '_blank', 'noopener,noreferrer');
                } else {
                  console.error('No Wikipedia URL found for:', data.name);
                }
              }}
            >
              Learn More About {data.name}
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
};

export default PlanetInfoCard;