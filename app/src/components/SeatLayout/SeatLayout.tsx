import React, { useState, useEffect } from 'react';

interface Seat {
  division: string;
  row: number;
  column: number;
  isMarked: boolean;
}

interface Row {
  seats: Seat[];
}

interface Division {
  name: string;
  rows: Row[];
}

interface SeatingChartProps {
  divisions: Division[];
  maxSeatsPerRow: number;
  onSeatSelection: (selectedSeats: Set<string>) => void;
}

const SeatingChart: React.FC<SeatingChartProps> = ({ divisions, maxSeatsPerRow, onSeatSelection }) => {
  const [selectedSeats, setSelectedSeats] = useState<Set<string>>(new Set());

  useEffect(() => {
    onSeatSelection(selectedSeats);
  }, [selectedSeats, onSeatSelection]);

  let globalRowIndex = 0;

  const handleSeatClick = (division: string, row: number, column: number) => {
    const seatKey = `${division}-${row}-${column}`;
    const isSelected = selectedSeats.has(seatKey);
    const newSelectedSeats = new Set(selectedSeats);

    if (isSelected) {
      newSelectedSeats.delete(seatKey);
    } else {
      newSelectedSeats.add(seatKey);
    }

    setSelectedSeats(newSelectedSeats);
  };

  return (
    <div className="mt-4 px-4">
      {divisions.map((division, divisionIndex) => (
        <div key={division.name} className="mb-6">
          {division.rows.map((row, rowIndex) => {
            globalRowIndex += 1;

            return (
              <div key={rowIndex} className="flex items-center mb-2">
                <div className="flex-shrink-0 w-8 text-gray-400 font-semibold text-center">
                  {String.fromCharCode(64 + globalRowIndex)}
                </div>

                <div className="flex flex-grow justify-center space-x-2">
                  {Array.from({ length: maxSeatsPerRow }).map((_, columnIndex) => {
                    const seat = row.seats.find(seat => seat.column === columnIndex);
                    const seatKey = `${division.name}-${rowIndex}-${columnIndex}`;
                    const isSelected = selectedSeats.has(seatKey);

                    const seatStyle = seat
                      ? seat.isMarked
                        ? {
                            width: '2rem',
                            height: '2rem',
                            backgroundColor: 'transparent',
                            border: 'none',
                            cursor: 'default',
                          }
                        : {
                            width: '2rem',
                            height: '2rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: `2px solid ${isSelected ? '#4CAF50' : '#B0B0B0'}`,
                            backgroundColor: isSelected ? '#4CAF50' : '#FFFFFF',
                            color: isSelected ? '#FFFFFF' : '#4CAF50',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s, border-color 0.3s',
                            borderRadius: '4px',
                            fontSize: '0.75rem',
                          }
                      : {
                          width: '2rem',
                          height: '2rem',
                          backgroundColor: 'transparent',
                        };

                    return seat ? (
                      <div
                        key={columnIndex}
                        onClick={!seat.isMarked ? () => handleSeatClick(division.name, rowIndex, columnIndex) : undefined}
                        style={seatStyle}
                        className="flex items-center justify-center hover:bg-gray-100"
                      >
                        {!seat.isMarked ? seat.column + 1 : ''}
                      </div>
                    ) : (
                      <div
                        key={columnIndex}
                        style={seatStyle}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
          {/* Full-width Horizontal Line */}
          {divisionIndex < divisions.length - 1 && (
            <div className="mt-2 px-2">
              <hr className="border-gray-300" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SeatingChart;
